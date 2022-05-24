import prismaClient from "../../prisma";
import { IOrderRemoveRequest } from "../../Interface/OrderRemove";

class RemoveOrderService{
    async execute({order_id}:IOrderRemoveRequest){
        const order = await prismaClient.order.delete({
            where:{
                id:order_id
            }
        })
        return order;
    }
}
export {RemoveOrderService}