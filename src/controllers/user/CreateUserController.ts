import {Request,Response} from 'express';
import {CreateUserSercice}from '../../services/user/CreateUserService'

class CreateUserController{
    async handle (req:Request, resp:Response){
        const {name,email,password} = req.body;
        const createUserSercice = new CreateUserSercice();
        const user = await createUserSercice.execute({name,email,password})
        return resp.json(user)
    }
}

export{CreateUserController}