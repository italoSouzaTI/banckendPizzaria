import { Request, Response } from 'express';
import { RemoveItemService } from '../../services/order/RemoveItemService';

class RemoveItemController {
    async handle (req: Request, resp: Response) {
        const item_id = req.query.item_id as string;

        const removeItemService = new RemoveItemService();

        const order = await removeItemService.execeute({
            item_id
        })
        return resp.json(order)
    }

}
export { RemoveItemController };