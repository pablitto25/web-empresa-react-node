import React, { useRef, useEffect } from 'react';
import styles from "./Hero.module.scss"


const YouTubeVideo = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    window.YT.ready(() => {
      playerRef.current = new window.YT.Player('player', {
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
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          },
        },
      });
    });
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return <div className={styles.embed_responsive_16by9} id="player" />;
};

export default YouTubeVideo;