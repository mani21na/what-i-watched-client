import React from 'react'

import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'
import { withRouter } from 'react-router';
import { fetchUsers } from '../actions/userActions'
import PostFormCard from '../components/PostFormCard';


class PostForm extends React.Component {
    state = {
        pic_url: "",
        info_url: "",
        flatform: "",
        caption: "",
        user_id: ""
    }

    componentDidMount() {
        //async
        //Promise
        //this.props.fetchUsers()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // grab form data from state
        e.preventDefault()
        let post = this.state
        
        // trigger an action to make a POST request
        this.props.createPost(post)
        this.props.createLike()
        .then(() => this.props.history.push('/'))
    }

    render() {
        const formSubject = "Record What You Watched"
        const buttonName = "Add Post"
        let optionUsers = this.props.users.map((user) =>
            <option key={user.id} value={user.id}>{user.name}</option>
        );
        return(
            <div>
                <PostFormCard
                    users={ this.props.users }
                    formSubject={ formSubject }
                    state={ this.state }
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    optionUsers={ optionUsers }
                    buttonName={ buttonName }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users
    }
}

PostForm = withRouter(PostForm);
export default connect(mapStateToProps,{ createPost, fetchUsers })(PostForm);