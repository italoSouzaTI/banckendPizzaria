import prismaClient from "../../prisma";
import { IRemoveItemRequest } from '../../Interface/RemoveItem'
class RemoveItemService {
    async execeute ({ item_id }: IRemoveItemRequest) {
        const order = await prismaClient.item.delete({
            where: {
                id: item_id
            }
        })
        return order;
    }

}
export { RemoveItemService };