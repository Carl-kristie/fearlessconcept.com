import '../index.css';

function Services() {
  return (
    <section className='services'>
      <div className='services-left'>
        <h2 className='services-title'>SERVICES</h2>
        <p className='services-text'>
          At Fearless Innovation Hub, we specialize in creating memorable
          digital experiences by merging creativity with technology. From
          crafting sleek websites to implementing powerful marketing solutions,
          we're dedicated to elevating your brand's online presence. Let's
          innovate together and make your digital dreams a reality.
        </p>
      </div>
      <div className='services-right'>
        <div className='row'>
          <div className='number'>01</div>{' '}
          <div className='service-item'>BRAND IDENTITY</div>
        </div>
        <div className='row'>
          <div className='number'>02</div>{' '}
          <div className='service-item'>WEB DEVELOPMENT</div>
        </div>
        <div className='row'>
          <div className='number'>03</div>{' '}
          <div className='service-item'>GRAPHIC DESIGN</div>
        </div>
        <div className='row'>
          <div className='number'>04</div>{' '}
          <div className='service-item'>COMMIT TO PAPER</div>
        </div>
        <div className='row last'>
          <div className='number'></div>
        </div>
      </div>
    </section>
  );
}

export default Services;
