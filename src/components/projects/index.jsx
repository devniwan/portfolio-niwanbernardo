import React from "react";
import ProjectCard from "../projectCard";
import { Container, BackgroundFade, Content } from "./styles";

import { projects } from "../../data/projectsdata";

const Projects = () => {
  return (
    <Container>
      <BackgroundFade />
      <h1>Projetos</h1>
      <p>Principais projetos na área de Análise de Dados e Desenvolvimento:</p>
      <Content>
        {projects.map((projects) => (
          <ProjectCard
            title={projects.title}
            image={projects.image}
            link={projects.link}
            desc={projects.description}
            subtitle={projects.subtitle}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Projects;
