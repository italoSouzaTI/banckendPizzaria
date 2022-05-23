import {Request,Response}from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

class ListCategoryController{
    async handle(req:Request,resp:Response){
        
        const listCategoryService = new ListCategoryService();
        const category = await listCategoryService.execute();
        
        return resp.json(category);
    }
}
export {ListCategoryController}