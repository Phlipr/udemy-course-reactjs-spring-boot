import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome, {this.props.match.params.name}!
                
                To manage your todo list, please click <Link to="/todolists">here</Link>.
            </div>
        )
    }
}

export default Welcome