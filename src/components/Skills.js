import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/Skills/html.svg";
import css from "../assets/img/Skills/css.svg";
import js from "../assets/img/Skills/js.svg";
import nextjs from "../assets/img/Skills/nextjs.png";
import react from "../assets/img/Skills/react.svg";
import mongodb from "../assets/img/Skills/mongodb.svg";
import mysql from "../assets/img/Skills/mysql.svg";
import nodejs from "../assets/img/Skills/nodejs.svg";
import tailwindcss from "../assets/img/Skills/tailwindcss.svg";
import illustrator from "../assets/img/Skills/illustrator.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a web developer, I have experience in HTML, CSS, JavaScript,
                and various web development frameworks such as React and
                Node.js. I am also proficient in designing and building
                responsive web interfaces that are optimized for different
                devices and screen sizes.<br></br> As an illustrator, I have a
                keen eye for detail and a deep understanding of color theory and
                composition. I am proficient in using Adobe Illustrator and
                Photoshop to create visually appealing graphics and
                illustrations for a wide range of digital media.{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="skills" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="skills" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={js} alt="skills" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="skills" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt="skills" />
                  <h5>Next JS</h5>
                </div>
                <div className="item">
                  <img src={tailwindcss} alt="skills" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="skills" />
                  <h5>My SQL</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="skills" />
                  <h5>Mongo DB</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="skills" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={illustrator} alt="skills" />
                  <h5>Adobe Illustrator</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
