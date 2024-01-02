import { FastifyReply, FastifyRequest } from "fastify";
import CreateCustomersServices from "../services/CreateCustomersServices";

class CreateCustomersController {
    async handle(request: FastifyRequest , reply: FastifyReply){

        const createCustomers = new CreateCustomersServices()

        const customers = await createCustomers.execute()

        reply.send(customers)
    }
}

export default CreateCustomersController