import React, { Component } from 'react'
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
        if (this.state.username === "PReynolds" && this.state.password === "Unique") {
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState( { hasInvalidLogin : false } )  
        }
        else {
            this.setState( { hasInvalidLogin : true } )
        }
    }
    
    render() {
        return (
            <div>
                Username: <input type="text"
                                 name="username"
                                 value={this.state.username}
                                 onChange={this.handleChange}></input>
                Password: <input type="password"
                                 name="password"
                                 value={this.state.password}
                                 onChange={this.handleChange}></input>
                <button onClick={this.handleLogin}>Login</button>
                {this.state.hasInvalidLogin && <div className="Error">Invalid login credentials.</div>}
            </div>
        )
    }
}

export default Login