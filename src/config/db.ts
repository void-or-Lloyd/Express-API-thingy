import { Pool } from "pg"

if (!process.env.DATABASE_URL) {
    throw new Error("Database url missing in .env!")
}


const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5, 
    connectionTimeoutMillis: 1000 * 10
})


db.connect((err) => {
    if(err) console.log(err)
    console.log("connected")
})

export default db