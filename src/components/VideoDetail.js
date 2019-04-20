import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { videoId } = video.id;
  const { title, description } = video.snippet;
  // const url = `https://www.youtube.com/embed/${videoId}`;
  const url = 'https://www.youtube.com/embed/nl_zq04r68E';

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={'https://www.youtube.com/embed/nl_zq04r68E'} />
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
