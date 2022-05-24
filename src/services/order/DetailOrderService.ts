import prismaClient from "../../prisma";
import { IDetailOrderRequest } from "../../Interface/DetailOrder";

class DetailOrderService {
    async execute ({ order_id }: IDetailOrderRequest) {
        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true,
            }
        })
        return orders;
    }
}

export { DetailOrderService };