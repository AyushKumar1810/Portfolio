import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/sorting-visuals.jpg";
import emotion from "../../Assets/Projects/Football-learning.jpg";
import editor from "../../Assets/Projects/Compile-with-me.jpg";
import chatify from "../../Assets/Projects/stream-free.jpg";
import suicide from "../../Assets/Projects/know-Your-Pokemon.jpg";
import bitsOfCode from "../../Assets/Projects/Find-Movies.jpg";

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
              title="Freetube"
              description="Developed an ad-free video streaming platform inspired by YouTube, emphasizing a seamless user experience and intuitive interface. This frontend project showcases my expertise in modern web technologies and responsive design, providing users with uninterrupted content consumption."
              ghLink="https://github.com/AyushKumar1810/my-app_1"
              demoLink="https://ayush-watch.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Find Movie"
              description="Developed an intuitive movie suggestion web app that enhances user experience by providing personalized movie recommendations. Leveraging modern frontend technologies, this project demonstrates my skills in creating dynamic and interactive interfaces. The app offers a seamless browsing experience, helping users discover their next favorite movie effortlessly."
              ghLink="https://github.com/AyushKumar1810/MOVIE_Sugg"
              demoLink="https://moviesear.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code-editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/AyushKumar1810/code-editor/tree/master/react-code-editor-main"
              demoLink="https://compilewithme.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="sorting Visuals "
              description="Created a web app that provides visualizations for a variety of sorting algorithms. This project showcases my expertise in web development and algorithm implementation, offering users a clear and intuitive way to explore and understand the inner workings of different sorting techniques. The app enhances user experience by offering interactive sorting animations, helping to demystify complex algorithms."
              ghLink="https://github.com/AyushKumar1810/sorting_visual"
              demoLink="https://sortingvisaul.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Find fav Pokemon"
              description="Developed a comprehensive Pokémon web app that offers detailed information about various Pokémon, including their strengths, weaknesses, and unique characteristics. The app provides an interactive and user-friendly experience, allowing users to explore and compare different Pokémon easily. This project highlights my ability to integrate complex data and create engaging interfaces, enhancing the overall Pokémon discovery experience."
              ghLink="https://github.com/AyushKumar1810/pokemon"
              demoLink="https://pokemonenjoy.netlify.app/"
               />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Football Player Tracking & Analysis"
              description="Developed a web app that integrates Machine Learning and Deep Learning, specifically utilizing YOLO for real-time object detection. This application offers powerful insights and analysis, enabling users to identify and track objects in various environments. By leveraging advanced algorithms and neural networks, the app provides a seamless and efficient way to incorporate AI-driven insights into different use cases, from security surveillance to sports analytics."
              ghLink="https://github.com/AyushKumar1810/FOOTBALL-LEARNING"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
