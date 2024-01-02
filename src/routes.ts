import { FastifyInstance , FastifyPluginOptions , FastifyRequest , FastifyReply } from "fastify";
import CreateCustomersController from "./controllers/CreateCustomersController";


export async function routes ( fastify: FastifyInstance , options: FastifyPluginOptions ){
    fastify.get("/" , async ( request: FastifyRequest , reply: FastifyReply ) => {
        reply.send("conectado com sucesso")
    })

    fastify.post("/customers", async ( request: FastifyRequest , reply: FastifyReply ) => {
        await new CreateCustomersController().handle(request , reply)
    })
}