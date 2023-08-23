import { userService } from '../services/Factory.js'
import UserDTO from '../dto/Users.js'

const getUsers = async(req, res) => {
    let results = await userService.get()
    res.send(results.map(result => new UserDTO(result)))
}

const saveUser = async(req, res) => {
    let { first_name, last_name, email } = req.body
    if (!first_name || !last_name || !email)
        return res.status(400).send({ error: 'Incomplete fileds'})
    let results = await userService.save({ first_name, last_name, email })
    res.send(results)
}

export default {
    getUsers, saveUser
}