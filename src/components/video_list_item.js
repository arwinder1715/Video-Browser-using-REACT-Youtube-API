import React from "react";

const VideoListItem = ({video,onVideoSelect}) => { //in ES6
  //const VideoListItem = (props) => { in ES5
  //  const video = props.video;in ES5
  const imageUrl = video.snippet.thumbnails.default.url
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
  <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
      </div>
      <div className="media-body">
         <div className="media-heading">{video.snippet.title}
         </div>
      </div>
  </div>
  </li>
);
};

export default VideoListItem;
