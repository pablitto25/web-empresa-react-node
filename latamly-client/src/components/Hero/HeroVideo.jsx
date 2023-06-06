import React, { useRef, useEffect } from 'react';
import styles from "./Hero.module.scss";

const HeroVideo = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    let player;
  
    const onPlayerReady = (event) => {
      player = event.target;
      player.playVideo();
    };
  
    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        if (player && typeof player.seekTo === 'function') {
          player.seekTo(0);
          player.playVideo();
        }
      }
    };
  
    const loadYouTubePlayer = () => {
      /* if (process.env.NODE_ENV === 'production' && window.location.protocol === 'https:') { */
        if (window.YT && window.YT.Player) {
          createPlayer();
        } else {
          window.onYouTubeIframeAPIReady = createPlayer;
        }
      /* } */
    };
  
    const createPlayer = () => {
      playerRef.current = new window.YT.Player('controlId', {
        videoId: 'gy4E8MWT61s',
        playerVars: {
          autoplay: 1,
          loop: 1,
          mute: 1,
          modestbranding: 1,
          controls: 0,
          showinfo: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };
  
    loadYouTubePlayer();
  
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);
  

  return <div className={styles.embed_responsive_16by9} id="controlId" />;
};

export default HeroVideo;