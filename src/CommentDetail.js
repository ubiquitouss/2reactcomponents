import React from 'react'

//first argument can be anything and that will be used as props
const CommentDetail = (props) => {
    console.log(props)
    return (
        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">
                    {props.blogPost}
                </div>
            </div>
        </div>
)
};

//This line will export the details here and make available for other files
export default CommentDetail;
