import Axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return Axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        return Axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name) {
        let username = 'PReynolds'
        let password = 'Unique'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            {
                headers : {
                    authorization : basicAuthHeader
                }
            }
        )
    }
}

export default new HelloWorldService()