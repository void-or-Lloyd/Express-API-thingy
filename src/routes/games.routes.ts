import { Router } from "express"
import { allGamesController } from "../controller/games.controller.js"

const router = Router()

router.get('/', allGamesController)

export default router