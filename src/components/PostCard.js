import React from "react";
import "../styles/PostCard.css";
import LikesCard from './LikesCard'

import LikesButton from '../containers/LikesButton'
//import EditButton from '../containers/EditButton'

function PostCard(props) {
  return(
    <article className="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-nickname">
            <span>{props.post.user.name}</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img id={props.post.id} src={props.post.pic_url} alt="post" />
        </div>
      </div>
      <div className="Post-like-button">
        <LikesCard postId={props.post.id} />
      </div>
      <div className="Post-action-box">
        <div className="Post-delete-button">
          <button type="button" className="btn btn-default btn-sm" key={props.post.id} onClick={(e) => props.handleClick(props.post.id, e)} >
            <span className="glyphicon glyphicon-trash"></span>
          </button>
        </div>
        <div className="PostModal__like-button">
          <LikesButton postId={props.post.id} />
        </div>
        {/* <div className="Post-edit-button">
          <EditButton post={props.post}/>
        </div>*/}
      </div>
      <footer>
        <div className="Post-caption">
          <strong>{props.post.info_url}</strong>
        </div>
        <div className="Post-flatform">
          <strong>{props.post.flatform}</strong>
        </div>
        <div className="Post-caption">
          <strong>{props.post.user.name} </strong>{props.post.caption}
        </div>
      </footer>
    </article>
  )
}



export default PostCard