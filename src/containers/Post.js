import React from 'react';

import { withRouter } from 'react-router';
import { deletePost } from '../actions/postActions'
import { fetchLikes } from '../actions/likeActions'
import { connect } from 'react-redux'

import PostCard from '../components/PostCard.js'

class Post extends React.Component {

  //componentDidMount() {
  //  this.props.fetchLikes()
  //}

  handleClick = (e) => {
    let post_id = e

    this.props.deletePost(post_id)
    .then(this.props.history.push('/'))
  }
 
  render() {
    return(
      <PostCard 
        post={ this.props.post }  
        handleClick={ this.handleClick }
      />
    )
  }
}

Post = withRouter(Post)

export default connect(null, { deletePost, fetchLikes })(Post);