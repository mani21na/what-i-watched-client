import React from 'react'

import { createPost } from '../actions/postActions'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pic_url: "",
            info_url: "",
            flatform: "",
            caption: "",
            user_id: "",
            likes: 0
        }
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
        .then(this.props.history.push('/'))
        // render to main page
    }

    render() {
        let optionUsers = this.props.users.map((user) =>
            <option key={user.id} value={user.id}>{user.name}</option>
        );
        return(
            <div>
                <h3>Record What You Watched</h3>
                <p>Nickname:
                    <select name="user_id" onChange={this.handleChange} value={this.state.user_id}>
                        {optionUsers}
                    </select>
                </p>
                <p>Image URL: <input onChange={this.handleChange} type="text" name="pic_url" value={this.state.pic_url}></input></p>
                <p>Info: <input onChange={this.handleChange} type="text" name="info_url" value={this.state.info_url}></input></p>
                <p>Flatform: <input onChange={this.handleChange} type="text" name="flatform" value={this.state.flatform}></input></p>
                <p>Caption: <input onChange={this.handleChange} type="text" name="caption" value={this.state.caption}></input></p>
                <button onClick={this.handleSubmit} type="submit">Add Post</button>
            </div>
        )
    }
}

PostForm = withRouter(PostForm);
export default connect(null,{ createPost })(PostForm);