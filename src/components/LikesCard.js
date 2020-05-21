import React from "react";
import '../styles/Likes.css'
import { connect } from 'react-redux'
import { getLikeByPostId } from '../reducers/likeReducer'
import { fetchLikes } from '../actions/likeActions'
 
// Displays the numbers of 'Likes' 
class  LikesCard extends React.Component{
    render(){
        //debugger
        const { like } = this.props
        return(
            <span className="PostCardLikes">
                { like[0]&&like[0].likes ?  
                    <i className="fa fa-heart" > <span className="PostCardLikes_count">{like[0].likes} likes</span></i> : 
                        null 
                }
            </span>
        )
    }
}

// `ownProps` variable contains own component props
const mapStateToProps = (state, ownProps) => ({
    like: getLikeByPostId(state, ownProps.postId)
})

export default connect(mapStateToProps, { fetchLikes })(LikesCard);
