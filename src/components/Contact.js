import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_9foakie', 'template_rk9t39a', form.current, 'zUmZw1JQqxtQfumlU')
      .then((result) => {
          console.log(result.text);
          setButtonText("Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input type="text" name="first_name" placeholder='First Name' required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="text" name="last_name" placeholder='Last Name' required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="email" name="user_email" placeholder='Email' required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="tel" name="user_phone" placeholder='Phone No.'/>
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea name="message" placeholder='Message' required/>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
