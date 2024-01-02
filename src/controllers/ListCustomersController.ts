import { FastifyReply, FastifyRequest } from "fastify";
import ListCustomersServices from "../services/ListCustomersServices";

class ListCustomersController {
    async handle(request: FastifyRequest , reply: FastifyReply){

        const listCustomersService = new ListCustomersServices()

        const customers = await listCustomersService.execute()

        reply.send(customers)

    }   
}

export default ListCustomersController