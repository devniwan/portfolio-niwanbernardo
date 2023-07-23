import React from "react";
import Typewriter from "./typewriter";
import { Container, Background, BackgroundFade, Content } from "./styles";

const backgroundLink =
  "https://i.postimg.cc/5tswjgx0/background-teste.gif";

const Header = () => {
  return (
    <Container>
      <BackgroundFade />
      <Background src={backgroundLink} />
      <Content>
        <span>Olá! Eu me chamo</span>
        <h1>Niwan Bernardo</h1>
        <Typewriter words={["<Analista de Dados/>", "<Desenvolvedor de Software/>"]} />
      </Content>
    </Container>
  );
};

export default Header;
