import axios from 'axios';

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors();
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

    setupAxiosInterceptors() {
        let username = 'PReynolds';
        let password = 'Unique';

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    console.log(this.isUserLoggedIn());
                    config.headers.authorization = basicAuthHeader;
                }
                console.log(config);
                return config;
            }
        );
    }
}

export default new AuthenticationService()