import Axios from "axios"
import { API_URL } from '../../Constants.js'

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get(`${API_URL}/hello-world`)
    }

    executeHelloWorldBeanService() {
        return Axios.get(`${API_URL}/hello-world-bean`)
    }

    executeHelloWorldPathVariableService(name) {
        return Axios.get(`${API_URL}/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()