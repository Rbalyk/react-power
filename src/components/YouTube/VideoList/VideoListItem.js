import React, {PureComponent} from 'react';

class VideoListItem extends PureComponent {
    render() {
        const {onChangeVideo, video, index, currentVideoIndex} = this.props;

        return (
            <div className={`videoListItem ${index === currentVideoIndex ? 'active' : '' }`} onClick={() => onChangeVideo(index)}>
                <div className="indexList number">{index + 1}</div>
                <div className="indexList play">▶</div>
                <div className="videoListItemBody">
                    <img src={video.snippet.thumbnails.default.url} alt="youtube"/>
                    <div className="videoListItemInfo">
                        <div className="videoTitle">{video.snippet.title}</div>
                        <span>React Conf</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default VideoListItem;

