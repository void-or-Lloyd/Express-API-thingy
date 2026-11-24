import { validateClient } from "../model/clients.model.js"
import type {Request, Response, NextFunction} from "express"



export async function validate(req: Request, res: Response, next: NextFunction) {
  if (!req.cookies?.token) return res.status(401).json({ msg: "Unauthorized" })

  try {
    const match = await validateClient(req.cookies.token)
    if (!match) return res.status(401).json({ msg: "Unauthorized" })
    req.user = match
    next()
  } 
  catch { return res.status(401).json({ msg: "Unauthorized" }) }
}