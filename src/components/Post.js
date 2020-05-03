import React from 'react';
import "./Post.css";

function Post(props){
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
            <div className="Post-caption">
              <strong>{props.post.user.name} </strong>{props.post.caption}
            </div>
        </article>
    )
}

export default Post