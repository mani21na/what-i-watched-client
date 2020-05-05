import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

import { createUser } from '../actions/userActions'

class UserForm extends React.Component {

    state = {
        name: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // grab form data from state
        // trigger an action to make a POST request
        e.preventDefault()
        let user = this.state
        this.props.createUser(user)
        .then(this.props.history.push('/'))
        // render to main page
    }

    render(){
        return(
            <div>
                <h3>Add New Acount</h3>
                <p>Username(Nickname): <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input></p>
                <p>Password: <input onChange={this.handleChange} type="text" name="password" value={this.state.password}></input></p>
                <button onClick={this.handleSubmit} type="submit">Add Account</button>
            </div>
        )
    }
}

UserForm = withRouter(UserForm);
export default connect(null,{createUser})(UserForm)