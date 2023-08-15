import React from "react";
import "./Contact.css";
import background from "../assets/contact-bcg1.jpg";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or inquiries? We'd love to hear from you!
          Contact our team at{" "}
          <a href="https://harvardartmuseums.org/" target="_blank" rel="noreferrer">
            this website
          </a>{" "}
          for any assistance or information you need.
        </p>

        <p>
          Our friendly staff is here to help you. Whether you're interested in
          learning about upcoming events, scheduling group visits, or simply
          want to share your thoughts, we're here to assist you. Your feedback
          is valuable to us as we strive to provide the best possible experience
          for all our visitors.
        </p>
        <p>
          Feel free to reach out to us during our operating hours. We look
          forward to connecting with you and enhancing your experience at Modern
          Art Museum.
        </p>
        <p>
          You can also follow us on social media for the latest updates and
          behind-the-scenes glimpses:
        </p>
        <div class="icon-container">
          <a
            href="https://www.facebook.com/harvardartmuseums"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="icons" />
          </a>
          <a
            href="https://twitter.com/harvartmuseums"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare className="icons" />
          </a>
          <a
            href="https://www.instagram.com/harvardartmuseums/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="icons" />
          </a>
          <a
            href="https://www.pinterest.com/harvardartmus/"
            target="_blank"
            rel="noreferrer"
          >
            <FaPinterestSquare className="icons" />
          </a>
        </div>
      </div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">First Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label htmlFor="">Email Address</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
          </div>
        </div>
        <div className="contact-submit">
          <button>Submit</button>
        </div>
      </form>
      <img src={background} alt="background" />
    </div>
  );
};

export default Contact;
