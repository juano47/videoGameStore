import VideoGameInfo from "./videoGame-info";
import Comment from "./comment";

function VideoGame(props) {
    return (
        <div className="video-game">
            <VideoGameInfo
                {...props}
            />
            <img className="video-game-image" src={props.image} alt={props.title}/>
            <div className="video-game-comments">
                <h3>Comments</h3>
                <ul>
                    {props.comments.map((comment) =>
                        <Comment key={comment.id} {...comment}/>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default VideoGame;