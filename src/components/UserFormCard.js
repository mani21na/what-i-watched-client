import React from "react";

// Post Form 
function UserFormCard(props) {
    return(
        <div>
            <h3>{ props.formSubject }</h3>
            <p>Username(Nickname): <input onChange={ props.handleChange } type="text" name="name" value={ props.state.name }></input></p>
            <p>Password: <input onChange={ props.handleChange } type="password" name="password" value={ props.state.password }></input></p>
            
            <button onClick={ props.handleSubmit } type="submit">{ props.buttonName }</button>
        </div>
    )
}
export default UserFormCard;