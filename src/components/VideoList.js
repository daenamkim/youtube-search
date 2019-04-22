import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  const { videos, onVideoSelect } = props;

  const videoItems = videos.map(video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
