import { FastifyReply, FastifyRequest } from "fastify";
import prismaClient from "../prisma";

interface ICreateCustomersProps{
    name: string
    email: string
}

class CreateCustomersServices {
    async execute({ name , email }: ICreateCustomersProps){

        if(!name || !email){
            throw new Error("necessario preencher todos os campos!")
        }

        const customers = await prismaClient.customers.create({
            data:{
                name,
                email,
                status: true
            }
        })  

        return customers
    }
}

export default CreateCustomersServices