import { FastifyInstance , FastifyPluginOptions , FastifyRequest , FastifyReply } from "fastify";


export async function routes ( fastify: FastifyInstance , options: FastifyPluginOptions ){
    fastify.get("/" , async ( request: FastifyRequest , reply: FastifyReply ) => {
        reply.send("conectado com sucesso")
    })
}