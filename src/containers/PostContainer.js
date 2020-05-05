import React from 'react'
import { fetchPosts } from '../actions/postActions.js'
import { connect } from 'react-redux'
//import Post from '../components/Post'
import PostCard from './PostCard.js'

class PostContainer extends React.Component {

    componentDidMount() {
        console.log("component did mount")
        // call an action that fetches all posts in state
        //async
        this.props.fetchPosts()
        console.log(this.props)
        console.log("component finished action calls")
    }

    render() {
        return(
            <div>
                {this.props.loading ? <h1>Loading all the posts</h1>  : this.props.posts.reverse().map(p => <PostCard key={p.id} post={p} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //
        posts: state.postReducer.posts,
        loading: state.postReducer.loading
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostContainer)