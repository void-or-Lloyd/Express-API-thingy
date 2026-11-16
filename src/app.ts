import express from "express"
import { devLogger, writeLogger } from "./middleware/logger.js"
import indexRouter from "./routes/index.js"
import morgan from "morgan"
import db from "./config/db.js"

const app = express()

app.use(express.json({limit: "20kb"}))
app.use(devLogger)
app.use(morgan("combined", {stream: writeLogger}))
app.use("/v1", indexRouter)
app.get("/", async (req, res) => {
    console.log(await db.query("SELECT now() AS time;"))
    res.json({msg: "test"})
})

export default app