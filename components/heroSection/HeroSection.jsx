import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';



  const AutoplaySlider = withAutoplay(AwesomeSlider);

const HeroSection = () => {
  return (
    <div style={{height: '50vh'}}>
        <AutoplaySlider
        animation="fallAnimation"
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={3000}
        // media={[
        //   {
        //     source: '/images/heroImg/img1.jpg',
        //     caption: 'I want to see what you got.',
        //   },
        //   {
        //     source: '/images/heroImg/img2.jpg',
        //     caption: 'I want to see what you got.',
        //   },
        //   {
        //     source: '/images/heroImg/img3.png',
        //     caption: 'I want to see what you got.',
        //   },
        // ]}
    >
      <div>
        <img style={{width: '100vw'}} src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <h1>jvhviuiuiuiuoiu</h1>
        <h1>jvhviuiuiuiuoiu</h1>
      </div>
      <div>
        <img style={{width: '100vw'}} src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80" alt="" />
      </div>
      <div>
        <img style={{width: '100vw'}} src="https://images.unsplash.com/photo-1519017828478-ca312238167a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
      </div>
      <div>
        <img style={{width: '100vw'}} src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div>
        <img style={{width: '100vw'}} src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
      </div>
    </AutoplaySlider>
    </div>
  )
}

export default HeroSection