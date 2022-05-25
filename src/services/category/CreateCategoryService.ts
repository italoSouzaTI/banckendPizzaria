import prismaClient from "../../prisma";
import {ICategory} from '../../Interface/category'
class CreateCategoryService{
    async execute({name}:ICategory){

        if(name === ''){
            throw new Error('Name invalid');
        }

        const category = await prismaClient.category.create({
            data:{
                name:name,
            },select:{
                id:true,
                name:true,
                created_at:true
            }
        })

        return category;
    }
}
export {CreateCategoryService}