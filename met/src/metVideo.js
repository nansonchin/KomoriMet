import React, { useRef, useEffect } from 'react'
import MetIntroVideo from './components/video/10MinMet.mp4'
import './metVideo.css';
import TwitterIcon from './components/picture/icon/twitter.svg'
import YoutubeIcon from './components/picture/icon/youtube.svg'
import TwitchIcon from './components/picture/icon/twitch.svg'

const MetVideo = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const fastForward = () => {
      if (videoRef.current) {
        videoRef.current.currentTime += 10; // Fast forward by 10 seconds (adjust as needed)
      }
      setTimeout(fastForward, 1000); // Fast forward every 1 second (adjust as needed)
    };

    fastForward();
  }, []);

  return (
    <section class="metVideo">
      <div class="metVideo-wrapper">
        <div class="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div class="container-videoMet">
              <video class="metIntroVideo" ref={videoRef} src={MetIntroVideo} autoPlay muted loop playsInline />
              <div class="metDot"></div>

            </div>
          </div>
          <div class="container">
            <div class="metCommuniti-container">
              <div class="row">
                <div class="col-4 col-lg-1 col-md-2 icon-container">
                  <img class="icon" src={TwitterIcon} alt="Twitter Icon" />
                  <div class="icon-count-ppl">40萬人</div>
                </div>
                <div class="col-4 col-lg-1 col-md-1 icon-container">
                  <img class="icon" src={YoutubeIcon} alt="Twitter Icon" />
                  <div class="icon-count-ppl">48.3萬人</div>
                </div>
                <div class="col-4 col-lg-1 col-md-1 icon-container">
                  <img class="icon" src={TwitchIcon} alt="Twitter Icon" />
                  <div class="icon-count-ppl">18萬人</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  )
}

export default MetVideo