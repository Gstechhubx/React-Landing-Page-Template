import React, { useRef } from "react";
import useVideoPlayer from "./useVideoPlayer";
import video from "../../vid/hang.mp4"




const VideoPlayer = () =>{
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
      } = useVideoPlayer(videoElement);
      return (
        
        <div id="videoplayer" className="container text-center">
            <div className="section-title">
                <h2>Watch Our Videos</h2>
               </div>
        <div className="video-wrapper">
          <video
            src={video}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
            <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.playbackRate}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="text-muted" onClick={toggleMute}>
            {!playerState.muted ? (
              <i className="bx bxs-volume-full"></i>
            ) : (
              <i className="bx bxs-volume-mute"></i>
            )}
          </button>
        </div>       
         </div>
      </div>
      );
}
export default VideoPlayer;