import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
    const [playerState, setPlayerState ] = useState({
        isPlaying: false,
        volumeLevel: 1.0,
        muted: false,
        playbackRate: 1.0,
        loop: true,    
        progress: 0,
        speed: 1
        });
    
    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying :! playerState.isPlaying,
            },)
            };

            useEffect(() => {
            playerState.isPlaying
            ? videoElement.current.play()
            : videoElement.current.pause()
            }, [playerState.isPlaying, videoElement]);

            const handleOnTimeUpdate = () => {
              const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
              setPlayerState({
                ...playerState,
                progress,
              });
            };

         const handleVideoProgress = (event) => {
          const manualChange = Number(event.target.value);
          videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
          setPlayerState({
            ...playerState,
            progress: manualChange,
          });
        };

            const handleVideoSpeed = (event) => {
                const speed = Number(event.target.value);
                videoElement.current.playbackRate = speed;
                setPlayerState({
                  ...playerState,
                  speed,
                });
              };

              const toggleMute = () => {
                setPlayerState({
                  ...playerState,
                  muted: !playerState.muted,
                });
              };
            
              useEffect(() => {
                playerState.muted
                  ? (videoElement.current.muted = true)
                  : (videoElement.current.muted = false);
              }, [playerState.muted, videoElement]);
                                
              return {
                playerState,
                togglePlay,
                handleOnTimeUpdate,
                handleVideoProgress,
                handleVideoSpeed,
                toggleMute,
              };
            };
    
    export default useVideoPlayer;