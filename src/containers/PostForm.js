import React from 'react'
import {createPost} from '../actions/postActions'
import {connect} from 'react-redux'


class PostForm extends React.Component {

    state = {
        pic_url: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // grab form data from state
        // trigger an action to make a POST request
        // clear form
        e.preventDefault()
        let post = this.state
        this.props.createDog(post)
        this.setState({
            pic_url: ""
        })
    }

    render(){
        return(
            <div>
                <h3>Add a new post image url:</h3>
                <p><input onChange={this.handleChange} type="text" name="pic_url" value={this.state.pic_url}></input></p>
                <button onClick={this.handleSubmit} type="submit">Add Post</button>
            </div>
        )
    }
}

export default connect(null,{createPost})(PostForm)