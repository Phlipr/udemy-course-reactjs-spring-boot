import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class Welcome extends Component {
    
    constructor(props) {
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }
    
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome, {this.props.match.params.name}!
                    
                    To manage your todo list, please click <Link to="/todolists">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then( response => console.log(response) )
    }
}

export default Welcome