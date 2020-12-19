import React, { Component } from 'react'
import moment from 'moment'
import { Field, Form, Formik } from 'formik'

class TodoComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            description : 'Learn forms',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }
    
    render() {
        return (
            <div>
                <h1>Todo #{this.props.match.params.id}</h1>
                <div className="container">
                    <Formik>
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
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