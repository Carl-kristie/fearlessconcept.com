import '../index.css';
import { TextGenerateEffect } from './textgen';

function Hero() {
  return (
    <>
      {/* <div className="hero-overlay"></div> */}
      <div className='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
              <TextGenerateEffect
                words='Fearless Innovation Hub'
                className='heroh2'
                overallDelay={0}
              />
              <TextGenerateEffect
                words='Trendsetting Digital Solutions'
                className='herospan'
                overallDelay={10}
              />
              <TextGenerateEffect
                words="We&nbsp;fuse&nbsp;creativity&nbsp;with&nbsp;technology to&nbsp;craft&nbsp;unforgettable&nbsp;digital&nbsp;experiences. From&nbsp;sleek&nbsp;websites&nbsp;to&nbsp;powerful&nbsp;marketing solutions, we're here to elevate your brand in the digital world."
                className='herop'
                overallDelay={10}
              />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
