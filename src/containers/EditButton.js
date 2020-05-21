import React from 'react'
import { Link } from 'react-router-dom';

import { updateLikes } from '../actions/likesActions'
import { connect } from 'react-redux'
//import PostForm from './PostForm';

class EditButton extends React.Component {
  
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {

  }

  render() {
    return (
      <Link to={`/post/${this.props.post.id}/edit`}>
        <button type="button" className="btn btn-default btn-sm" key={this.props.post.id} onClick={(e) => this.handleClick(this.props.post.id, e)} >
          <span className="glyphicon glyphicon-edit"></span>
        </button>
      </Link>
    );
  }
  }



export default connect(null,{ updateLikes })(EditButton);