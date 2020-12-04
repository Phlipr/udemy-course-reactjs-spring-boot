import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'
import Error from './Error'
import TodoList from './TodoList'

class TodoApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/welcome/:name' component={Welcome}/>
                    <Route path='/todolists' component={TodoList}/>
                    <Route path='' component={Error}/>
                </Switch>
            </Router>
        )
    }
}

export default TodoApp