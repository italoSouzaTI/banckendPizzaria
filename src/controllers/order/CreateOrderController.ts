import {Request,Response} from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService';

class CreateOrderController{
    async handle(req:Request,resp:Response){
        const {table,name} = req.body;

        const createOrderService = new CreateOrderService();
        const order = await createOrderService.execute({
            table,
            name
        })
        return resp.json(order);
    }
}
export {CreateOrderController};