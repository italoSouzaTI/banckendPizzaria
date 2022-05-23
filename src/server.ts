import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";
import cors from 'cors'

const app = express();
// Habilitando exibição de JSON;
app.use(express.json());
// Liberando ip de acesso;
app.use(cors());
// Chamando Rotas;
app.use(router);
// middleware tratamento de erro;
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        //Se for intancia tipo error
        return res.status(400).json({
            error: err.message,
        });
    }
    return res.status(500).json({
        status:'error',
        message:'Internal server error.'
    })
});

app.listen(3333, () => console.log("server online!! 🔥🔥"));
