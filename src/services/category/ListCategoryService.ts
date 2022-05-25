import prismaClient from "../../prisma";
class ListCategoryService {
    async execute () {
        const category = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }, where: {
                created_and: null
            }
        });
        return category;
    }
}

export { ListCategoryService };