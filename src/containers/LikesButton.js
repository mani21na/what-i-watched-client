import React from 'react'

import {getLikeByPostId} from '../reducers/likeReducer'
import { increaseLike, createLike } from '../actions/likeActions'
import { connect } from 'react-redux'

class LikesButton extends React.Component {
  constructor(props) {
    super(props)
    const { like } = this.props
    //const postId = this.props.postId

    this.state = {
      id: props.postId,
      likes: like[0].likes,
      post_id: like[0].post_id
    }
    //console.log("initial state", this.state.likes, this.state.id)

    this.handleClick = this.handleClick.bind(this)
  }

  //_hasLikes() {
  //  
  //  console.log(like)
  //  if(like) {
  //    return true
  //  } else {
  //    return false
  //  }
  //}

  handleClick(e) {
    e.preventDefault();
    
    //*******setState is Acyn and 
    //*******accepts a function as a callback once the state has been updated.
    this.setState({
      likes: this.state.likes + 1
      },
      () => this.props.increaseLike(this.state)
    )
  }
 
  render() {
    return (
      <button type="button" className="btn btn-default btn-sm" onClick={this.handleClick}>
        <span className="glyphicon glyphicon-heart"></span>
      </button>
    );
  }
  }

// `ownProps` variable contains own component props
const mapStateToProps = (state, ownProps) => ({
  like: getLikeByPostId(state, ownProps.postId),
  likes: state.likeReducer.likes
})

export default connect(mapStateToProps,{ increaseLike, createLike })(LikesButton);