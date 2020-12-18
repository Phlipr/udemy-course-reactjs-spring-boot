import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Login from './Login'
import Welcome from './Welcome'
import Error from './Error'
import TodoList from './TodoList'
import AuthenticatedRoute from './AuthenticatedRoute'
import LogoutComponent from './Logout'
import HeaderComponent from './Header'
import FooterComponent from './Footer'
import TodoComponent from './TodoComponent'

class TodoApp extends Component {
    render() {
        return (
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login' component={Login}/>
                    <AuthenticatedRoute path='/welcome/:name' component={Welcome}/>
                    <AuthenticatedRoute path='/todolists/:id' component={TodoComponent}/>
                    <AuthenticatedRoute path='/todolists' component={TodoList}/>
                    <AuthenticatedRoute path='/logout' component={LogoutComponent}/>
                    <Route path='' component={Error}/>
                </Switch>
                <FooterComponent/>
            </Router>
        )
    }
}

export default TodoApp