import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

class SendOrderController {
    async handle (req: Request, resp: Response) {
        const { order_id } = req.body;
        const SendOrder = new SendOrderService();
        const order = await SendOrder.execute({
            order_id
        })
        return resp.json(order);
    }
}
export { SendOrderController };