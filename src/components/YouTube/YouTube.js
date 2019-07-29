import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideosData } from "../../actions/videos";
import VideoDetail from './Player/Player';
import VideoList from './VideoList/VideoList';

import './style.scss';

class YouTube extends Component {
    state = {
        currentVideoIndex: 0,
    };

    componentDidMount(){
        const { fetchData } = this.props;
        fetchData()
    };

    changeVideo = ( index ) => {
        this.setState({
            currentVideoIndex: index,
        });
    };

    render() {
        const { currentVideoIndex } = this.state;
        const { videos } = this.props;

        if ( !videos ) {
            return <div>Loading...</div>;
        }

        return (

            <div className={'youtube'}>
                <VideoDetail
                    currentVideoIndex = { currentVideoIndex }
                    videos = { videos }
                    onChangeVideo = { this.changeVideo }
                />

                <VideoList
                    videoList = { videos }
                    onChangeVideo = { this.changeVideo }
                    currentVideoIndex = { currentVideoIndex }
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videos.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: response => dispatch(fetchVideosData(response))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(YouTube);
