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

const startServer = async () => {
    try {
        await sequelize.sync()
        app.listen(5000, () => console.log('Server is running on port 3000'))
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

startServer()
