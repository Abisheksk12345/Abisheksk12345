import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../Projects/pexels-burak-the-weekender-186461.jpg";
import bitsOfCode from "../Projects/pexels-pixabay-50987.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="PROJECT:Northern trust chicago"
              description="➢ Developed HR Management system product for Northern trust chicago to handle
              Employee Information And Employee 360 like Promotions, salary increment features
              ➢ Developed Covid –19 Trace and Heath Tracker application
              ➢ Developing Data Analytics dashboard for to track Agent/Merchant transaction,
              Territory Challenges, Competitor monitoring, fraud detection Crayon Data Pvt Ltd - Ui
              consultant Worked to improve existing products based on customer evaluations and
              needs
              ➢ Successfully prioritized product requirements and set realistic expectations in regards
              to development and timeline . "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PROJECT:Amica"
              description="(Technologies - React, Redux-toolkit, React-Router ) Contributed to the development of a loan application system for a prestigious bank. Took charge of building essential features related to loan summaries, approval processes, and post-approval follow-ups."
          
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
