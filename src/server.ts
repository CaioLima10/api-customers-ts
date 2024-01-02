import fastify from "fastify"
import { routes } from "./routes"
import cors from "@fastify/cors"

const app = fastify({ logger: true })

const PORT = process.env.PORT || 3333

app.setErrorHandler(( error , request , reply ) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {

    await app.register(routes)
    await app.register(cors)

    try {
        await app.listen(PORT , () => {
            console.log("running server")
        })

    } catch (error) {
        process.exit(1)
    }   
}

start()