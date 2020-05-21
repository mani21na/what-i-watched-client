import React from "react";

// Post Form 
function PostFormCard(props) {
    return(
        <div>
            <h3>{props.formSubject}</h3>
            <p>Nickname:
                <select name="user_id" onChange={ props.handleChange } value={ props.state.user_id }>
                    { props.optionUsers }
                </select>
            </p>
            <p>Image URL: <input onChange={ props.handleChange } type="text" name="pic_url" value={ props.state.pic_url }></input></p>
            <p>Info: <input onChange={ props.handleChange } type="textbox" name="info_url" value={ props.state.info_url }></input></p>
            <p>Flatform: <input onChange={ props.handleChange } type="text" name="flatform" value={ props.state.flatform }></input></p>
            <p>Caption: <input onChange={ props.handleChange } type="textbox" name="caption" value={ props.state.caption }></input></p>
            
            <button onClick={ props.handleSubmit } type="submit">{ props.buttonName }</button>
        </div> 
    )
}
export default PostFormCard;