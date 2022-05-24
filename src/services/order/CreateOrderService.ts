import prismaClient from "../../prisma";
import { IOrderRequest } from "../../Interface/Order";

class CreateOrderService{
    async execute({name,table}:IOrderRequest){

        const order = await prismaClient.order.create({
            data:{
                table:table,
                name:name,
            }
        })
        return order;
    }
}
export {CreateOrderService};