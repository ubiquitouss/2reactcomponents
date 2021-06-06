import React from 'react'
import faker from 'faker'

//first argument can be anything and that will be used as props
const CommentDetail = (props) => {
    console.log(props)
    return (
        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00 pm</span>
                </div>
                <div className="text">
                    Nice blog post
                </div>
            </div>
        </div>
)
};

//This line will export the details here and make available for other files
export default CommentDetail;
