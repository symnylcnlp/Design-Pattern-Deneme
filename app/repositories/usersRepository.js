import { User } from '../models/usersModel.js'

class UserRepository {
    async createUser(data) {
        return User.create(data)
    }

    async findAllUsers() {
        return User.findAll()
    }
}

export default new UserRepository()
