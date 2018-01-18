import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // Loop through props.videos array with the built in map() function
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
