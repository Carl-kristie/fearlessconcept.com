import '../index.css';
import hands from '../assets/hands.mp4';

function Contact() {
  return (
    <>
      <section className='contact-section'>
        <div className='contact-head'>
          <h2>
            Reach out to transform your ideas to reality,{' '}
            <span className='blue'> Let's make it big!</span>
          </h2>
          <video className='hands' width='500' height='500' autoPlay muted loop>
            <source src={hands} type='video/mp4' />
          </video>
        </div>
        <div className='contact-form' id='contact'>
          <div className='form-text'>
            <span>Get in touch</span>
            <p>Have a project in mind? Let's discuss</p>
            <p className='p'><span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" fill="#b0b0b0" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg></span>+2348143078914</p>
            <p className='p'><span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#b0b0b0" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg></span>fearlessinnovationhub@gmail.com</p>
          </div>
          <form action='https://formspree.io/f/moqyqkzg' method='POST'>
            <input type='text' name='name' placeholder='Your Name' required />
            <input
              type='email'
              name='_replyto'
              placeholder='Your Email'
              required
            />
            <input type='text' name='Subject' placeholder='Subject' />
            <textarea
              name='message'
              placeholder='Your Message'
              required
              rows={4}
            ></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
