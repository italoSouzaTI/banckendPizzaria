import prismaClient from "../../prisma"
import{compare}from 'bcryptjs'
import {sign} from 'jsonwebtoken'
import {IAuthRequest} from '../../Interface/Auth'

class AuthUserService{
    async execute({email,password}:IAuthRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        });

        if(!user){
            throw new Error("User/password incorrect");
        }

        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new Error("User/password incorrect");
            
        }
        //Gerando token usuário;
        const token = sign(
            {
                name:user.name,
                email:user.email
            },
            process.env.JWT_SECRET,
            {
                subject:user.id,
                expiresIn:'30d'
            }
        )
        const userAuth = {
            id:user.id,
            name:user.name,
            email:user.email,
            token:token
        }

        return userAuth
    }

}

export {AuthUserService}