import express from 'express'
import { createUser, getUsers } from '../controllers/usersController.js'

const router = express.Router()
router.get('/create', (req, res) =>  res.render('usersForm'))
router.post('/create', createUser)
router.get('/', getUsers)

export default router
