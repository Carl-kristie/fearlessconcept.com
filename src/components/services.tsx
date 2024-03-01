import '../index.css';

function Services() {
  return (
    <section className='services'>
       <h2 className='services-title'>SERVICES</h2>
      <div className='services-left'>
       
        <p className='services-text'>
        At Fearless Innovation Hub, we are passionate about transforming creative ideas into real world success tales. With a commitment to excellence and a diverse team of experts, we specialize in four key pillars: Brand Identity, Web Development, Graphic Design, and Commit to Paper (Writing).
<br />
<br />
Why Choose Us:
<br />
•	Expertise: Professionals with years of expertise in their respective industries make up our team.
<br />
•	Customization: We tailor our services to your unique needs and goals.
<br />
•	Creativity: We pride ourselves on innovative solutions that set you apart from the competition.
<br />
•	Quality Assurance: With every job, our dedication to quality guarantees your pleasure.
<br />
•	Timely Delivery: We prioritize meeting deadlines and always deliver on time.
        </p>
      </div>
      <div className='services-right'>
        <div className='row'>
          <div className='number'>01</div>{' '}
          <div className='service-item'>BRAND IDENTITY <span className="details">We create comprehensive brand identities which involves several key elements such as: brand strategy, brand name, logo, color palette, typography, voice & tone, brand guidelines, brand collateral (business card, letter head, website ETC), brand experience.</span></div>
        </div>
        <div className='row'>
          <div className='number'>02</div>{' '}
          <div className='service-item'>WEB DEVELOPMENT <span className="details">We create stunning and functional websites that drive results. Our websites are designed to engage, inform, and convert visitors into loyal customers. Whether you're a startup or an established business, our web development services are tailored to your needs.</span></div>
        </div>
        <div className='row'>
          <div className='number'>03</div>{' '}
          <div className='service-item'>GRAPHIC DESIGN <span className="details">Our graphic design team breathes life into your brand. From captivating logos and branding materials to eye-catching marketing collateral, we use design to make a lasting impression. Let us tell your story through visuals.</span></div>
        </div>
        <div className='row'>
          <div className='number'>04</div>{' '}
          <div className='service-item'>COMMIT TO PAPER <span className="details">Content is the voice of your brand. Our talented writers craft persuasive, SEO-friendly content that resonates with your audience. We help you communicate your message effectively, whether it's on your website, blog, or social media.</span></div>
        </div>
        <div className='row last'>
          <div className='number'></div>
        </div>
      </div>
    </section>
  );
}

export default Services;
