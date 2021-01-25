import axios from 'axios';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth', {
            headers: {authorization: this.createBasicAuthToken(username, password)}
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', {
            username,
            password
        })
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    registerSuccessfulJwtLogin(username, token) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createJwtAuthToken(token));
    }

    createJwtAuthToken(token) {
        return 'Bearer ' + token;
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');

        if (user == null) return false;

        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) return '';
        return user;
    }

    setupAxiosInterceptors(header) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = header;
                }
                return config;
            }
        );
    }
}

export default new AuthenticationService()