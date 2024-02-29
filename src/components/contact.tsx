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
