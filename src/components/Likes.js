import React from "react";

function Likes(post_id, handler, number) { 
    return(
        <button key={post_id} onClick={handler}>♥: {number}</button>
    )
}

export default Likes;