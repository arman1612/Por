import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import expense_tracker from "../../Assets/Projects/expense tracker.png";
import weather from "../../Assets/Projects/weather.png";
import spotify from "../../Assets/Projects/spotify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather app"
              description="Weather app is designed to provide you with accurate and up-to-date weather information for any place you desire, whether it's your hometown or a destination halfway around the world."
              ghLink="https://github.com/arman1612/Weather_app"
              demoLink="https://arman1612.github.io/Weather_app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense_tracker}
              isBlog={false}
              title="Expense tracker"
              description=" Expense tracker allowing users to input and manage their expenses through a user-friendly interface.Users can input expense details such as titles and amounts, which are then dynamically presented in a list format"
              ghLink="https://github.com/arman1612/expense-tracker-react"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description=" Developed a Spotify clone web application with HTML CSS and JavaScript, closely emulating Spotify's layout and design.Implemented components for displaying song lists, song details, and playback controls."
              ghLink="https://github.com/arman1612/Spotify-clone"
              demoLink=" https://arman1612.github.io/Spotify-clone/"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
