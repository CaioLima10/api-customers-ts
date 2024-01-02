import fastify from "fastify"

const app = fastify({ logger: true })

const PORT = process.env.PORT || 3333

const start = async () => {
    try {
        await app.listen(PORT , () => {
            console.log("running server")
        })

    } catch (error) {
        process.exit(1)
    }   
}

start()