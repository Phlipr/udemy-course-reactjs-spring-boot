import Axios from 'axios'
<<<<<<< HEAD
import { JPA_API_URL } from '../../Constants.js'
=======
import { API_URL, JPA_API_URL } from '../../Constants.js'
>>>>>>> f164b0aa819454f543399e5df80cc6ec0cd4d32c

class TodoDataService {
    retrieveAllTodos(name) {
        return Axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return Axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    deleteTodo(name, id) {
<<<<<<< HEAD
        return Axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        return Axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo) {
        return Axios.post(`${JPA_API_URL}/users/${name}/todos`, todo)
=======
        return Axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        return Axios.put(`${API_URL}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo) {
        return Axios.post(`${API_URL}/users/${name}/todos`, todo)
>>>>>>> f164b0aa819454f543399e5df80cc6ec0cd4d32c
    }
}

export default new TodoDataService()