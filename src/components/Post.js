import React from 'react';
import "./Post.css";

function Post(props){
    //return(
    //    <div className="centering">
    //        <div className="post-image">
    //            <img id={props.post.id} src={props.post.pic_url} alt="????" />
    //        </div>
    //    </div>
    //)

    return(
        <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-nickname">
                    <span>{props.user.name}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img id={props.post.id} src={props.post.pic_url} alt="????" />
              </div>
            </div>
            <div className="Post-caption">
              <strong>{props.user.name}</strong>{props.post.caption}
            </div>
          </article>
    )
}

export default Post