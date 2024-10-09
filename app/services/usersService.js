import userRepository from '../repositories/usersRepository.js'

class UserService {
    async registerUser(data) {
        return userRepository.createUser(data)
    }

    async getAllUsers() {
        return userRepository.findAllUsers()
    }
}

export default new UserService()
