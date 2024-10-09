import userService from '../services/usersService.js'

export const createUser = async (req, res) => {
    await userService.registerUser(req.body)
    res.redirect('/users')
}

export const getUsers = async (req, res) => {
    const users = await userService.getAllUsers()
    res.render('usersList', { users })
}
