import React from "react";
import Typewriter from "./typewriter";
import { Container, Background, BackgroundFade, Content } from "./styles";
import backgroundGif from './background_niwan.gif';

const Header = () => {
  return (
    <Container>
      <BackgroundFade />
      <Background src={backgroundGif} />
      <Content>
        <span>Olá! Eu me chamo</span>
        <h1>Niwan Bernardo</h1>
        <Typewriter words={["<Analista de Dados/>", "<Desenvolvedor de Software/>"]} />
      </Content>
    </Container>
  );
};

export default Header;
