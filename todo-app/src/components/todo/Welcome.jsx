import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class Welcome extends Component {
    
    constructor(props) {
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulRequest = this.handleSuccessfulRequest.bind(this)
        this.handleError = this.handleError.bind(this)

        this.state = {
            welcomeMessage : '',
            errorMessage : ''
        }
    }
    
    render() {
        return (
            <>
                {this.state.errorMessage !== '' && <div className="alert alert-warning">
                    {this.state.errorMessage}
                </div>}
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome, {this.props.match.params.name}!
                    
                    To manage your todo list, please click <Link to="/todolists">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulRequest(response) )

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then( response => this.handleSuccessfulRequest(response) )
        .catch( error => this.handleError(error) )
    }

    handleSuccessfulRequest(response) {
        this.setState( { welcomeMessage : response.data.message } )
    }

    handleError(error) {
        let errorMsg = '';

        if (error.message) {
            errorMsg += error.message
        }

        if (error.response && error.response.data) {
            errorMsg += error.response.data.message
        }

        this.setState( { errorMessage : errorMsg } )
    }
}

export default Welcome