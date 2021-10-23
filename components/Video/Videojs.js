import React, {useEffect, useRef} from 'react';
import videojs from 'video.js';

export default function  VideoPlayer(props) {
     const videoPlayerRef = useRef(null);
    useEffect(()=>{
      const player = videojs(videoPlayerRef.current, props);
    },[])
    console.log(videoPlayerRef.current)
    console.log(props)

//   componentDidMount() {
//     // instantiate video.js
//     this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
//       console.log('onPlayerReady', this);
//     });
//   }

//   // destroy player on unmount
//   componentWillUnmount() {
//     if (this.player) {
//       this.player.dispose();
//     }
//   }


 
    return (
      <div data-vjs-player>
        <video ref={videoPlayerRef} className="video-js" />
      </div>
    );
  }
