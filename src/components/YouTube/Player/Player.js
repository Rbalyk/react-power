import React, {Component} from 'react';
import YouTube from 'react-youtube';
import { opts } from '../../../app.const';

import './style.scss';

class VideoDetail extends Component {

    state = {
        currentVideo: '',
        currentVideoTitle: '',
    };

    onSetVideo() {
        const { currentVideoIndex, videos} = this.props;
        const currentVideo = {
            title: videos[currentVideoIndex].snippet.title,
            videoId: videos[currentVideoIndex].contentDetails.videoId,
        };

        this.setState({
            currentVideoTitle: currentVideo.title,
            currentVideo: currentVideo.videoId,
        });
    }

    componentDidMount() {
        this.onSetVideo();
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.onSetVideo();
        }
    }

    render() {
        const { currentVideo, currentVideoTitle } = this.state;
        const { onChangeVideo, currentVideoIndex, videos } = this.props;
        const nextVideo = currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1;

        return (
            <div className="player">
                <div className="playerMain">
                    <YouTube
                        videoId={currentVideo}
                        opts={opts}
                        onEnd={() => onChangeVideo(nextVideo)}
                    />
                </div>
                <div className="playerMainTitle">{ currentVideoTitle }</div>
            </div>
        )
    }
}
export default VideoDetail;
