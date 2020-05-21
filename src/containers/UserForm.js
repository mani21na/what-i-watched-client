import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

import { createUser } from '../actions/userActions'
import UserFormCard from '../components/UserFormCard';

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
        .then(() => this.props.history.push('/posts/new'))
        // render to main page
    }

    render(){
        const formSubject = "Add New Acount"
        const buttonName = "Add Account"
        return(
            <div>
                <UserFormCard 
                    formSubject={ formSubject }
                    state={ this.state }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    buttonName={ buttonName }
                />
            </div>
        )
    }
}

UserForm = withRouter(UserForm);
export default connect(null,{createUser})(UserForm)