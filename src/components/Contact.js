import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Feel free to get in touch with us for any inquiries or questions. We're
        here to help!
      </p>
      <div>
        <h2>Visit Us</h2>
        <p>Epillo Health Systems Private Limited B58, 2nd Floor ,</p>
        <p>
          Bhishma Pitama Marg, Main Road, above Yes Bank, Defence Colony, New
          Delhi, Delhi 110024
        </p>
      </div>
      <div>
        <h2>Email Us</h2>
        <p>Email: contact@epillo.com</p>
      </div>
      <div>
        <h2>Call Us</h2>
        <p>Phone: 123-456-7890</p>
      </div>
      <div>
        <h2>Social Media</h2>
        <p>
          Connect with us on social media for the latest updates, news, and
          events:
        </p>
        <ul style={{padding:'0'}}>
          <li>
            <a href="https://www.facebook.com/epillohealth/">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/EpilloHealth">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/epillohealth/?hl=en">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
