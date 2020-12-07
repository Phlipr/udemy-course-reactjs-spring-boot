import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Login from './Login'
import Welcome from './Welcome'
import Error from './Error'
import TodoList from './TodoList'
import LogoutComponent from './Logout'
import HeaderComponent from './Header'
import FooterComponent from './Footer'

class TodoApp extends Component {
    render() {
        return (
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/welcome/:name' component={Welcome}/>
                    <Route path='/todolists' component={TodoList}/>
                    <Route path='/logout' component={LogoutComponent}/>
                    <Route path='' component={Error}/>
                </Switch>
                <FooterComponent/>
            </Router>
        )
    }
}

export default TodoApp