import React, {PureComponent} from 'react';
import VideoListItem from './VideoListItem';

import './style.scss';

class VideoList extends PureComponent {

    render() {
        const {videoList, onChangeVideo, currentVideoIndex} = this.props;
        return (
            <div className="videoListContainer">
                <div className="videoListInfo">
                    <h1>React Conf 2018</h1>
                </div>
                <div className="videoList">
                    {
                        videoList.map((videoItem, index) =>
                            <VideoListItem
                                key={index}
                                index={index}
                                video={videoItem}
                                onChangeVideo={onChangeVideo}
                                currentVideoIndex = { currentVideoIndex }
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default VideoList;

