function VideoGameInfo(props) {
    return (
        <div className="video-game-info">
            <div className="video-game-info-title">
                {props.title}
            </div>
            <div className="video-game-info-description">
                {props.description}
            </div>
            <div className="video-game-info-row">
                <div className="video-game-info-rating">
                    Rating: {props.rating}
                </div>
                <div className="video-game-info-year">
                    Year: {props.year}
                </div>
                <div className="video-game-info-price">
                    Price: {props.price}
                </div>
            </div>
        </div>
    )
}
export default VideoGameInfo;