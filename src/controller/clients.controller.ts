import { registerClientsModel } from "../model/clients.model.js";
import type { Request, Response } from "express";

export async function registerClientsController(req: Request, res:Response) {
    try {
        const api_client = await registerClientsModel(req.body.username)
        res.status(200).json(api_client) 
    } catch (err) {
        console.error(err)
        res.status(403).json({msg: "Database error"})
    }
}   

export async function testController(req: Request, res:Response){
    res.json({msg: "test"})
}