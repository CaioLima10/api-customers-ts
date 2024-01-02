import prismaClient from "../prisma";

class ListCustomersServices {
    async execute(){

        const listCustomersServices = prismaClient.customers.findMany()

        return listCustomersServices

    }
}

export default ListCustomersServices