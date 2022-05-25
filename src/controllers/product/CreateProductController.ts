import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService';

class CreateProductController {
    async handle (req: Request, resp: Response) {

        const { name, price, description, category_id } = req.body;

        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("error upload file");
        } else {
            const { originalname, filename: banner } = req.file;
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });
            return resp.json(product);
        }


    }
}

export { CreateProductController }