import express from 'express'
import {a} from '../Controller/user_controller.js'
const routes = express.Router()

routes.get('/test',a)

export default routes;