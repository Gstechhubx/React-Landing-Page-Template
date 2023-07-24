import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
    const [playerState, setPlayerState ] = useState({
        isPlaying: false,
        currentTime: 0.123456789 ,// seconds as float with,
        durationTime: null,
        volumeLevel: 1.0,
        muted: false,
        playbackRate: 1.0,
        loop: false,    
        loadedPercentage: 0,    
        errorMsg: "",
        });
    
    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying :! playerState.isPlaying,
            //currentTime:,
            //durationTime :,
            //volumeLevel :,
            //muted :,
            //playbackRate :,
            //loop :,
            //loadedPercentage :,
            //errorMsg :,
            },)
            };

            useEffect(() => {
            playerState.isPlaying
            ? videoElement.current.play()
            : videoElement.current.pause()
            }, [playerState.isPlaying, videoElement]);

            const handleOnTimeUpdate = () =>{
                const progress = (videoElement.current.currentTime / videoElement.current.durationTime *100);
                setPlayerState({
                    ...playerState,
                    progress,
                    currentTime: parseFloat(videoElement.current.currentTime).toFixed(8),
                    loadedPercentage: parseInt(progress)
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
                  isMuted: !playerState.isMuted,
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