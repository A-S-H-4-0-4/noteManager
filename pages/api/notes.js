import HttpStatus from "http-status-codes";
import prisma from "../../lib/prismadb";
import { getSession } from "next-auth/react";


export default async (req, res) => {
    
    const session = await getSession({ req: req });
    const { method } = req;
    let responseObject = {
        message: "failure",
        data: {},
        errors: [{ errorMessage: "Sorry Some Server Error" }],
    };
console.log(session);
    if (session) {
        const user = await prisma.user.findFirst({
            where: { email: { equals: session.user.email } },
            select: {
                id: true
            }
        });
        console.log(user);

        if (method === "POST") {

            try {

                const body = req.body;
                const { title, type, notes, imgLink, link, } = body
                const result = await prisma.notes.create({
                    data: {
                        user: {
                            connect: {
                                id: user?.id
                            }
                        },
                        type: type,
                        notes: notes,
                        title: title,
                        imgLink: imgLink,
                        link: link,
                        createdAt:new date()
                    }, select: {
                        id: true,
                        title: true,
                        type: true,
                        notes: true,
                        imgLink: true,
                        link: true,
                        createdAt: true,
                        updatedAt: true
                    }
                });
                responseObject.data = { data: result };
                responseObject.message = "success";
                responseObject.errors = [];
                return res.status(HttpStatus.OK).json(responseObject);
            } catch (error) {
                console.log(error);
            }
        } else if (method === "GET") {

            try {
                const result = await prisma.notes.findMany({
                    where: {
                        userId: user?.id,
                    },
                    orderBy:{
                        type:'asc'
                    }
                })

                responseObject.data["data"] = result;
                responseObject.message = "success";
                responseObject.errors = [];
                console.log(result);
            } catch (error) { }

            res.status(HttpStatus.OK).json(responseObject);
        }
    }
}