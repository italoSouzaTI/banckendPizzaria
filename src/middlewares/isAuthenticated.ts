import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { IPayload } from "../Interface/Payload";

export function isAuthenticated(
    req: Request,
    resp: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return resp.status(401).end();
    }
    const [,token] = authToken.split(" ");
   try {
       //Validar token
       const{sub}= verify(
           token,
           process.env.JWT_SECRET
       ) as IPayload;
       //recuperar o id do token 
       req.user_id = sub;
        return next();
   } catch (error) {
    return resp.status(401).end();
   }
}
