import React from "react";
import { Container, Content, Card } from "./styles";

import { RiServerFill, RiBarChart2Fill } from "react-icons/ri";
import { BiCodeBlock } from "react-icons/bi";

const Services = () => {
  return (
    <Container>
      <h1>Serviços</h1>
      <p>Principais serviços que posso oferecer a você:</p>
      <Content>
        <Card>
          <RiBarChart2Fill size={"100px"} />
          <h2>Análise</h2>
          <p>
            Analiso dados com o objetivo de descobrir informações úteis e apoiar a tomada de decisões.
          </p>
        </Card>
        <Card>
          <BiCodeBlock size={"100px"} />
          <h2>Desenvolvimento</h2>
          <p>
            Desenvolvo sites profissionais, blogs, Api's, portfólios e landing pages.
          </p>
        </Card>
        <Card>
          <RiServerFill size={"100px"} />
          <h2>Backend</h2>
          <p>
            Trabalho com aplicações envolvendo a linguagem Python e crio softwares para automatizar tarefas.
          </p>
        </Card>
      </Content>
    </Container>
  );
};
export default Services;
