import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome, {this.props.match.params.name}!
            </div>
        )
    }
}

export default Welcome