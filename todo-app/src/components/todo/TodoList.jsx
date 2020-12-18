import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class TodoList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            todos : 
                [
                    // { id: 1, description: "Learn React!", done: false, TargetDate: new Date()},
                    // { id: 2, description: "Visit Grand Canyon", done: false, TargetDate: new Date()},
                    // { id: 3, description: "Learn Mandarin", done: false, TargetDate: new Date()}
                ],
            message : null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                // console.log(response)

                this.setState(
                    {
                        todos : response.data
                    }
                )
            }
        )
    }
    
    render () {
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date:</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map 
                                    (
                                        todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState( {message : `Delete of todo ${id} successful.`} );
                this.refreshTodos();
            }
        )
    }
}

export default TodoList