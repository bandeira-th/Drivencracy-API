import {Router} from 'express'
import { pollGetController } from '../controllers/pollGetController.js'
import { pollPostController } from '../controllers/pollPostController.js'
import { validatePoll } from '../middlewares/validatePoll.js'
import validateSchema from '../middlewares/validateSchema.js'
import { pollPostSchema } from '../schemas/pollPostSchema.js'

const router = Router()

router.post("/poll", validatePoll, validateSchema(pollPostSchema), pollPostController)
router.get("/poll", pollGetController)


export default router