import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'
import Error from './Error'

class TodoApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/welcome' component={Welcome}/>
                    <Route path='' component={Error}/>
                </Switch>
            </Router>
        )
    }
}

export default TodoApp