import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import Mud from "../../Assets/Projects/Mud.jpg";
import wanderLust from "../../Assets/Projects/wanderLust.jpg";
import internship from "../../Assets/Projects/internship.jpg";


import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={Mud}
              isBlog={false}
              title="NewsHUB"
              description="I’ve developed NewsHub, a sleek and user-friendly news website using WordPress. It features a clean layout with easy navigation, presenting top news, premium articles and dynamic categories such as Politics, Business, and Sports.The design emphasizes readability, ensuring an optimal experience for digital audiences."

              demoLink="https://www.linkedin.com/posts/mubarak-sharif-wordpress-expert_internshippakistan-wordpressdevelopment-webdevelopment-activity-7296988520663977984-acTY?utm_source=share&utm_medium=member_android&rcm=ACoAAEIqDtkBPfo7seq214ucvhFBKib4SCtuV2M"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internship}
              isBlog={false}
              title="online InternShip"
              description="I’ve developed an Online internship portal using WordPress, designed to help students find remote internships.The website features featured internship listings, Courses and an easy-to-navigate interface for users to explore valuable internship opportunities.The testimonial carousel adds credibility, showcasing feedback form successful interns."

              demoLink="https://www.linkedin.com/posts/mubarak-sharif-wordpress-expert_webdevelopment-wordpress-internshipplatform-activity-7294350428668936192-iMWo?utm_source=share&utm_medium=member_android&rcm=ACoAAEIqDtkBPfo7seq214ucvhFBKib4SCtuV2M"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderLust}
              isBlog={false}
              title="wanderLust"
              description="I’ve developed Wanderlust Adventures, a visually stunning travel website using WordPress.The site showcases popular destinations,travel packages, and an easy-to-use booking system.With its clean design and user-friendly navigation, it offers an engaging experience for travelers looking to explore the world."

              demoLink="https://www.linkedin.com/posts/mubarak-sharif-wordpress-expert_internshippakistan-wordpress-webdevelopment-activity-7292087331396767744-LoaF?utm_source=share&utm_medium=member_android&rcm=ACoAAEIqDtkBPfo7seq214ucvhFBKib4SCtuV2M"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
