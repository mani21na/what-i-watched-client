import React from 'react'
import { fetchPosts } from '../actions/postActions.js'
//import { fetchUsers } from '../actions/userActions.js'
import { connect } from 'react-redux'
import Post from '../components/Post'

class PostContainer extends React.Component {

    componentDidMount() {
        console.log("component did mount")
        // call an action that fetches all posts in state
        //async
        this.props.fetchPosts()
        //fetchUsers()추가 필요!!
        //this.props.fetchUsers()
        console.log(this.props)
        console.log("component finished action calls")
    }

    //findUser(user_id) {
    //    return(
    //        this.props.user.find(user => user.id === user_id)
    //    )
    //}

    render() {
        return(
            <div>
                {this.props.loading ? <h1>Loading all the posts</h1>  : this.props.posts.map(p => <Post key={p.id} post={p} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts,
        loading: state.postReducer.loading
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostContainer)