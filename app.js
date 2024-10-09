import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './app/routes/usersRoutes.js'
import { sequelize } from './app/models/usersModel.js'

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/users', usersRoutes)

const port = 5000

app.listen(port, console.log('server ayakta'))
