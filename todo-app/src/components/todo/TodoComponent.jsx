import React, { Component } from 'react'

class TodoComponent extends Component {
    render() {
        return (
            <div>Todo # {this.props.match.params.id}</div>
        )
    }
}

export default TodoComponent