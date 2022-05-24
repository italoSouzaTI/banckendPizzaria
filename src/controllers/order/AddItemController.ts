import { Request, Response } from 'express';
import { AddItemService } from '../../services/order/AddItemService';

class AddItemController {
    async handle (req: Request, resp: Response) {
        const { order_id, product_id, amount } = req.body;
        const addItem = new AddItemService();
        const order = await addItem.execute({
            order_id,
            product_id,
            amount
        })
        return resp.json(order);
    }
}

export { AddItemController };