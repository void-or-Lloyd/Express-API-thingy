import { validateClient } from "../model/clients.model.js"
import type { Request, Response, NextFunction } from "express"


export async function validate(req:Request, res:Response, next:NextFunction) {
    if(!req.body || req.body == undefined) res.status(401).json({msg: "Unauthorized"})
    else {
        const match = await validateClient(req.body.hash) //Från Cookie
        if(match) next()
        else res.status(401).json({msg: "Unauthorized"})
    }
}