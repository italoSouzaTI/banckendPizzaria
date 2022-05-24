import { Request, Response } from 'express';
import { OrderFinishService } from '../../services/order/OrderFinishService';

class OrderFinishController {
    async handle (req: Request, resp: Response) {
        const { order_id } = req.body;

        const finishOrder = new OrderFinishService();
        const order = await finishOrder.execute({
            order_id
        })

        return resp.json(order);
    }
}
export { OrderFinishController }