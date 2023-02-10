import './Contact.css'

const Contact = () => {


  return ( 
    <div className='contact'>
      <div className="title">
        <h3>Contact us</h3>
        <span>let`s stay in touch!</span>
      </div>
      <div className='contact-form'>
        <div className="form">
          <h2>Send us a message</h2>
          <div className="per-info">
            <div className="input-box">
              <input type="text" name="name" id="name" required/>
              <span>Your Name</span>
            </div>
            <div className="input-box">
              <input type="text" name="email" id="email" required/>
              <span>Your Email</span>
            </div>
          </div>
          <div className="input-box">
            <input type="text" name="subject" id="subject" required/>
            <span>Subject</span>
          </div>
          <div className="input-box">
            <textarea name="desc" id="desc" required></textarea>
            <span>Description</span>
          </div>
          <button className="main-button">Send Message</button>
        </div>
        <div className="info">
          <h2>Contact Information</h2>
          <ul>
            <li>090-484-8080</li>
            <span>phone number</span>
            <li>info@company.com</li>
            <span>email address</span>
            <li>123 Aenean id posuere dui,Praesent laoreet 10660</li>
            <span>street address</span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
