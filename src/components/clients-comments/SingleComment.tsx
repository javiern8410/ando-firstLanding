import React from 'react'
import './single-comment.scss';
import Avatar from '../avatar/Avatar'

const SingleComment: React.FunctionComponent<any> = ({ comment }) => {

    return (
        <div className="single-comment">
            <div className="user-info">
                <div>
                    <Avatar name={comment.name} avatar={comment.avatar} />
                </div>
            </div>
            <div className="quote-left">
                <i className="fa fa-quote-left fa-lg" aria-hidden="true"></i>
            </div>
            <div className="container">
                <div>
                    <p>
                        {comment.comment}
                    </p>
                </div>
                <div className="user-data">
                   <span className="strong-text"> {comment.name} </span>  {comment?.position}
                </div>
            </div>
            <div className="quote-right" style={{ textAlign: 'right' }}>
                <i className="fa fa-quote-right fa-lg" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default SingleComment;

