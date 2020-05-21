import React from 'react'
import { fetchPosts } from '../actions/postActions'
import { fetchLikes } from '../actions/likeActions'
import { fetchUsers } from '../actions/userActions'
import { connect } from 'react-redux'

import Post from './Post.js'
//import likesReducer from '../reducers/likesReducer'

class PostContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchLikes()
        this.props.fetchPosts()
        this.props.fetchUsers()
    }

    render() {
        const {posts}  = this.props
        //console.log(posts)
        return(
            <div className='App-post-location'>
                {(posts) ? posts.map((post) => <Post key={post.id} post={post} />) : <h1>Loading all the Posts</h1>}               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchLikes, fetchUsers })(PostContainer)