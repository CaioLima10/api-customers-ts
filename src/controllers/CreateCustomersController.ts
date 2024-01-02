import { FastifyReply, FastifyRequest } from "fastify";
import CreateCustomersServices from "../services/CreateCustomersServices";

class CreateCustomersController {
    async handle(request: FastifyRequest , reply: FastifyReply){

        const { name , email } = request.body as { name: string , email: string }

        const createCustomers = new CreateCustomersServices()

        const customers = await createCustomers.execute({ name , email })

        reply.send(customers)
    }
}

export default CreateCustomersController