import prismaClient from "../../prisma";
import { IProductListRequest } from '../../Interface/ProductList'

class ListByCategoryService {
    async execute ({ category_id }: IProductListRequest) {
        const findByCategory = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })
        return findByCategory;
    }
}
export { ListByCategoryService };