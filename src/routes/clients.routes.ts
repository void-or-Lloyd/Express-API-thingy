import { Router } from "express";
import { registerClientsController, testController  } from "../controller/clients.controller.js";
const router = Router()

router.post('/register', registerClientsController)
router.get("/test", testController)

export default router