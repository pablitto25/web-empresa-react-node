import React, {useRef} from 'react'
import styles from "./Hero.module.scss"
import YouTube from 'react-youtube';

const Hero = () => {

    const opts = {
      height: '1080',
      width: '100%',
      playerVars: {
        autoplay: 1,
        loop: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
      },
    }
    const playerRef = useRef(null);
    
    const handlePlayerStateChange = event => {
      const player = event.target;
      if (event.data === YouTube.PlayerState.ENDED) {
        player.playVideo();
      }

      if (event.data === window.YT.PlayerState.PAUSED) {
        playerRef.current.internalPlayer.playVideo();
      }
    }

    

    

  return (
    
      <div className={styles.video_background} onClick={() => playerRef.current.internalPlayer.playVideo()}>
      <YouTube videoId="gy4E8MWT61s" opts={opts} onStateChange={handlePlayerStateChange} ref={playerRef}/>
      <div className={styles.overlay}>
        <p className={styles.text1}>involve to evolve</p>
        <p className={styles.text2}>We expand your business in <b>LATIN AMERICA</b></p>
      </div>
    </div>

    
  )
}


export default Hero