import prismaClient from "../../prisma";
import { IDetailOrderRequest } from "../../Interface/DetailOrder";

class OrderFinishService {
    async execute ({ order_id }: IDetailOrderRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        });
        return order;
    }
}
export { OrderFinishService };