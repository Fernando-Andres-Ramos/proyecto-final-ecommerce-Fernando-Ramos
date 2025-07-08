import { Router } from "express";
import {login} from '../controllers/auth.controllers.js'

const auth = Router()

auth.post('/', login)

export default auth