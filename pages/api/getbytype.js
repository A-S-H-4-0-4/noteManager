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
            where: { email: { equals:session.user.email} },
            select: {
                id: true
            }
        });
        console.log(user);
       if (method === "GET") {
        const {type}=req.body
            try {
                const result = await prisma.notes.findMany({
                    where: {
                        userId: user?.id,
                       type:{
                        startsWith:type,
                        mode:'insensitive'
                       } 
                    },
                    select:{
                        id:true,
                        title:true,
                        type:true,
                        notes:true,
                        imgLink:true,
                        link:true,
                        createdAt:true,
                        updatedAt:true,
                        user:{
                            select:{name:true}
                        }
                    },
                    orderBy:{
                        createdAt:'asc'
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