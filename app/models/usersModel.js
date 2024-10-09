import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('beauty', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false
})

export { User, sequelize }

