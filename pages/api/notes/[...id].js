import HttpStatus from "http-status-codes";
// import prisma from "../../lib/prismadb";
import { getSession } from "next-auth/react";
import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from "next";

export default async (req, res) => {
    const session = await getSession({ req: req })
    const { method } = req;
console.log(session); 
    if (session) {
        let responseObject = {
            message: "failure",
            data: {},
            errors: [{ errorMessage: "Sorry Some Server Error" }],
        };
 console.log(method); 

    if (method === "GET") {
        let { id } = req.query;
        const queryId = isNaN(Number(id)) ? 0 : Number(id);
        try {
            const results = await prisma.notes.findUnique(
                {
                    where: {
                        id: queryId,
                    },
                    select: {
                        id:true,
                        type:true,
                        title:true,
                        notes:true,
                        imgLink:true,
                        link:true,
                        createdAt:true,
                        updatedAt:true,
                        user:{
                            select:{
                                name:true
                            }
                        }
                    }
                }
            );
            responseObject.data = results
            responseObject.message = "success"
            responseObject.errors = []

        } catch (error) {
            responseObject.data = {}
            responseObject.message = "failure"
            responseObject.errors = [{ "errorMessage": error }]
        }
        res.status(HttpStatus.OK).json(responseObject);
    }
    else if (method === "PUT") {

        let { id } = req.query;
        const queryId = isNaN(Number(id)) ? 0 : Number(id);
        try {
            const body = req.body;
            let {type,imgLink,title,link,notes  } = body;
            try {   
                const result = await prisma.notes.update({
                    where: {
                        id: queryId,
                    },
                    data: {
                       title:title,
                       type:type,
                       notes:notes,
                       link:link,
                       imgLink:imgLink,
                  updatedAt:new Date()
                    },
                })

                responseObject.data = result
                responseObject.message = "success"
                responseObject.errors = []
            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    let errorMessage;
                    if (err.code === "P2002") {
                        errorMessage = "A party with these crediantials already exist";
                    }
                    const error = { errorMessage: errorMessage };
                    responseObject.errors = [error]
                }
            }
            res
                .status(HttpStatus.OK)
                .json(responseObject);
        } catch (err) {
            responseObject.errors = [{ "errorMessage": err }]
            res.status(HttpStatus.BAD_REQUEST).json(responseObject);
        }
    } else if(method==="DELETE"){
        try {
            const result=await prisma.notes.delete({
                where:{
                    id:queryId
                },
                select:{
                    type:true,
                    title:true,
                }
            });
            responseObject.data = result
            responseObject.message = "success"
            responseObject.errors = []
            console.log(result);
            res.status(HttpStatus.OK).json(responseObject);
        } catch (error) {
            console.log(error);
            responseObject.data = {}
            responseObject.message = "error"
            responseObject.errors = [{errorMessage:error}]
            res.status(HttpStatus.CONFLICT).json(responseObject);
        } 
    }
}
}
