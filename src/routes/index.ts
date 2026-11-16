import { Router } from "express"

const router = Router()

router.get("/health", (req, res) => {
    res.json({status: "OK", uptime: process.uptime(), usage: process.cpuUsage()})
})

router.get("/", (req, res) => {
    res.json({title: "Welcome to API"})
})

router.use((req, res) => {
    res.status(404).json({error: "Endpoint not found"})
})


export default router