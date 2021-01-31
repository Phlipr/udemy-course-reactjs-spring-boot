import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService';
import './Login.css'

class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            hasInvalidLogin: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    handleLogin() {
        // if (this.state.username === "PReynolds" && this.state.password === "Unique") {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     this.setState( { hasInvalidLogin : false } )  
        // }
        // else {
        //     this.setState( { hasInvalidLogin : true } )
        // }

        // AuthenticationService
        // .executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(
        //     () => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //         this.setState( { hasInvalidLogin : false } )
        //     }
        // )
        // .catch(
        //     () => {
        //         this.setState( { hasInvalidLogin : true } )
        //     }
        // )

        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then(
            (response) => {
                AuthenticationService.registerSuccessfulJwtLogin(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
                this.setState( { hasInvalidLogin : false } )
            }
        )
        .catch(
            () => {
                this.setState( { hasInvalidLogin : true } )
            }
        )
    }
    
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                Username: <input type="text"
                                 name="username"
                                 value={this.state.username}
                                 onChange={this.handleChange}></input>
                Password: <input type="password"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.handleChange}></input>
                <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                {this.state.hasInvalidLogin && <div className="alert alert-warning">Invalid login credentials.</div>}
            </div>
        )
    }
}

export default Login