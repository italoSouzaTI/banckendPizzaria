import {IUserRequest} from '../../Interface/Users'
import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'


class CreateUserSercice {
    async execute({name,email,password}:IUserRequest) {
        // verificar se tem email;
        if(!email){
            throw new Error("Email incorret");
        }
        // verificar se email existe;
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }
        // Criando senha criptografada
        const passwordHash = await hash(password,8);
        
        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passwordHash,
            },select:{
                id:true,
                name:true,
                email:true,
                createde_at:true,
            }
        })

        return user;
    }
}
export { CreateUserSercice };
