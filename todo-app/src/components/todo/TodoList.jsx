import React, { Component } from 'react'

class TodoList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            todos : 
                [
                    { id: 1, description: "Learn React!", done: false, TargetDate: new Date()},
                    { id: 2, description: "Visit Grand Canyon", done: false, TargetDate: new Date()},
                    { id: 3, description: "Learn Mandarin", done: false, TargetDate: new Date()}
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
                            <th>Done</th>
                            <th>Target Date:</th>
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
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.TargetDate.toString()}</td>
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