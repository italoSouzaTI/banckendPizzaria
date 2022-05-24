import prismaClient from "../../prisma";
import { IAddItemService } from "../../Interface/AddItem";

class AddItemService {
    async execute ({ amount, order_id, product_id }: IAddItemService) {
        const order = await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        });
        return order;
    }
}
export { AddItemService };