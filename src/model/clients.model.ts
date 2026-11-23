import db from "../config/db.js";
import generateUniqueId from 'generate-unique-id'; 
import jwt from "jsonwebtoken"
  

export async function registerClientsModel(username:string) {
  const id = generateUniqueId();
  const hash = jwt.sign({id: id, name: username}, process.env.JWT_SECRET)
  try {
    const api_clients =  await db.query(`INSERT INTO api_clients ( name, api_key_hash, player_id) VALUES ('${username}', '${hash}', '${id}') `) 
    return api_clients
  } catch (error) {
    console.log(error)
    return error
  } 
}


export async function validateClient(hash:string) {
    const payload = jwt.verify(hash, process.env.JWT_SECRET)

    if (!payload) {
        throw new Error("hash missing")
    }
    try {
        const client = await db.query("SELECT player_id, name FROM api_clients WHERE player_id = ?", [payload.id])
        return client
    } catch (error) {
        console.log(error)
        return error
    }
}   