function Comment(props) {
    return (
        <div className="comment">
            <div className="comment-message">
                Message: {props.message}
            </div>
            <div className="comment-author">
                Author: {props.author}
            </div>
            <div className="comment-date">
                Date: {props.date}
            </div>
        </div>
    )
}

export default Comment;