import React, { useState } from "react";
import "./YoutubePlayer.scss";
import PlayVideoImg from "img/play-video.svg";

const YoutubePlayer = ({ src, img }) => {
  const [videoPlayer, setVideoPlayer] = useState(false);

  return (
    <div className="youtube-player">
      {videoPlayer ? (
        <iframe src={src} frameBorder="0" allow="autoplay"></iframe>
      ) : (
        <>
          <PlayVideoImg onClick={() => setVideoPlayer(true)} />
          <img
            onClick={() => setVideoPlayer(true)}
            src={img}
            alt="Imagen video"
          />
        </>
      )}
    </div>
  );
};

export default YoutubePlayer;
