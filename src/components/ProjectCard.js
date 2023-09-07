import { Col } from "react-bootstrap";
import code from "../assets/img/code.svg";
import link from "../assets/img/link.svg";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  Url,
  isWebsite,
  githubUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Movie App" />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        {isWebsite && (
          <div className="social-icon mb-2">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <img src={code} alt="Icon" />
            </a>
            <a href={Url} target="_blank" rel="noreferrer">
              <img src={link} alt="Icon" />
            </a>
          </div>
        )}
      </div>
    </Col>
  );
};
