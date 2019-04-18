import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  const videoItems = props.videos.map(video => <VideoListItem video={video} />);

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
