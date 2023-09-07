import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Illustrator", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{"Rahul Khushalani"}</h1>
              <span className="wrap">
                {"{"}
                {text}
                {"}"}
              </span>
              <p>
                As a beginner Web Developer and Illustrator, I have a passion
                for creating visually appealing and functional digital content.
                I am constantly seeking to improve my skills and expand my
                knowledge, experimenting with different tools and techniques to
                create engaging designs and user-friendly websites. With a
                combination of creativity and technical know-how, I am eager to
                bring my ideas to life and make a meaningful impact in the
                digital world.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header" />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
