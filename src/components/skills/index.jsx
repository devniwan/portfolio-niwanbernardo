import React from "react";
import { Container, BackgroundFade, Content, SkillList } from "./styles";

import {
  DiJavascript1,
  DiReact,
  DiDatabase,
  DiVisualstudio,
  DiGithubFull,
  DiCss3Full,
  DiHtml5,
  DiMysql,
  DiPython,
  DiMsqlServer
} from "react-icons/di";

const Skills = () => {
  return (
    <Container>
      <BackgroundFade />
      <h1>Habilidades</h1>
      <p>Principais habilidades e ferramentas que costumo utilizar: </p>
      <Content>
        <SkillList>
          <DiPython size={"90px"} />
          <DiDatabase size={"90px"} />
          <DiMysql size={"90px"} />
          <DiMsqlServer size={"90px"} />
          <DiVisualstudio size={"90px"} />
        </SkillList>
        <SkillList>
          <DiHtml5 size={"90px"} />
          <DiCss3Full size={"90px"} />
          <DiJavascript1 size={"90px"} />
          <DiReact size={"90px"} />
          <DiGithubFull size={"90px"} />
        </SkillList>
      </Content>
    </Container>
  );
};

export default Skills;
