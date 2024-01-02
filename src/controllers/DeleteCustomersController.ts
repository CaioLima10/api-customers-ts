import { FastifyReply, FastifyRequest } from "fastify";
import DeleteCustomersServices from "../services/DeleteCustomersServices";

class DeleteCustomersController {
    async handle(request: FastifyRequest , reply: FastifyReply){

        const { id } = request.query as { id: string }

        const findCustomers = new DeleteCustomersServices()

        const customers = findCustomers.execute({ id })

        reply.send(customers)
    }
}

export default DeleteCustomersController