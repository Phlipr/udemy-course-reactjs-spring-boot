import React, { Component } from 'react'

class TodoList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            todos : 
                [
                    { id: 1, description: "Learn React!"},
                    { id: 2, description: "Visit Grand Canyon"},
                    { id: 3, description: "Learn Mandarin"}
                ]
        }
    }
    
    render () {
        return (
            <div>
                <h1>Todo Lists!</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map 
                                (
                                    todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList