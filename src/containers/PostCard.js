import React from 'react';
import "./PostCard.css";

import { withRouter } from 'react-router';
import { deletePost, updateLikesPost } from '../actions/postActions'
import { connect } from 'react-redux'
import Likes from '../components/Likes'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: this.props.post,
      user: this.props.post.user
    }
  }

  handleClick = (e) => {
    let post_id = this.state.post.id
    this.props.deletePost(post_id)
    .then(this.props.history.push('/'))

    // render to main page
    //this.props.history.push('/');
  }

  handleLikes = (e) => {
    e.preventDefault()
    let newCount = Object.assign({}, this.setState)
    newCount.likes = this.state.post.likes + 1
    this.setState({
      newCount
    })
    let post_id = this.state.post.id
    this.props.updateLikesPost(post_id)
  }

  render() {
        return(
        <article className="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-nickname">
                  <span>{this.state.user.name}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img id={this.state.post.id} src={this.state.post.pic_url} alt="post" />
              </div>
            </div>
            <div className="Post-flatform">
              <strong>{this.state.post.flatform}</strong>
            </div>
            <div className="Post-caption">
              {this.state.post.info_url}
            </div>
            <div className="Post-caption">
              <strong>{this.state.user.name} </strong>{this.state.post.caption}
            </div>
            <footer>
              <div className="Post-buttons">
                <div>
                  <Likes key={this.state.post.id} onClick={this.handleLikes} number={this.state.post.likes} />
                </div>
                <div className="Post-delete-button">
                  <button type="button" key={this.state.post.id} onClick={this.handleClick}><img src={require("../img/delete-icon.png")} alt="delete"></img></button>
                </div>
              </div>
            </footer>
        </article>
    )}
}

Post = withRouter(Post);
export default connect(null,{ deletePost, updateLikesPost })(Post);