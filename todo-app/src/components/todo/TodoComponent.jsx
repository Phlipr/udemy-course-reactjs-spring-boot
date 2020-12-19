import React, { Component } from 'react'
import moment from 'moment'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import TodoDateService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class TodoComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : moment.utc(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()

        TodoDateService.retrieveTodo(username, this.state.id)
        .then( response => this.setState({
            description : response.data.description,
            targetDate : moment.utc(response.data.targetDate).format("YYYY-MM-DD")
        }))
    }

    validate(values) {
        let errors = {}

        if (!values.description) {
            errors.description = "Enter a Description."
        }
        else if (values.description.length < 5) {
            errors.description = "Enter at least 5 characters in the Description."
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid Target Date."
        }

        return errors
    }

    onSubmit(values) {
        //console.log(values)
        let username = AuthenticationService.getLoggedInUserName()

        TodoDateService.updateTodo(username, this.state.id, {
            id : this.state.id,
            description : values.description,
            targetDate : values.targetDate
        }).then( () => this.props.history.push('/todolists'))
    }
    
    render() {
        let {description, targetDate} = this.state
        
        return (
            <div>
                <h1>Todo #{this.props.match.params.id}</h1>
                <div className="container">
                    <Formik
                        initialValues = {{description, targetDate}}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description"
                                                  component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <ErrorMessage name="targetDate"
                                                  component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="Submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent