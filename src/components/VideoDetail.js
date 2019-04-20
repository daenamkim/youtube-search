import React from 'react';

const VideoListItem = ({ video }) => {
  const { title, description } = video.snippet;
  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16y9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
