import prismaClient from "../prisma";

interface IDeleteCustomersProps{
    id: string
}

class DeleteCustomersServices {
    async execute({ id }: IDeleteCustomersProps){

        if(!id){
            throw new Error("Solicitação invalida.")
        }

        const findCustomers = await prismaClient.customers.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomers){
            throw new Error("Cliente não existe.")
        }


        await prismaClient.customers.delete({
            where:{
                id: findCustomers.id
            }
        })

        return { message: "Deletado com sucesso!" }
    }
}

export default DeleteCustomersServices