import React from "react";
import {
  Container,
  Content,
  BackgroundFade,
  Localize,
  Links,
  LinksContainer,
} from "./styles";

import {
  RiMailOpenLine,
  RiDiscordLine,
  RiWhatsappLine,
  RiMapPin2Line,
  RiLinkedinBoxFill,
  RiInstagramLine,
} from "react-icons/ri";

const Contact = () => {
  const handleEmail = () => {
    window.open("mailto:devniwan@hotmail.com", "_blank");
  };

  const handleGithub = () => {
    window.open("https://www.linkedin.com/in/niwanbernardo/", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/devniwan/", "_blank");
  };

  const handleDiscord = () => {
    const discordUsername = "Niwan Bernardo";

    navigator.clipboard.writeText(discordUsername);
    alert("Usuario do discord copiado para area de transferência!");
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5511991359164";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Container>
      <BackgroundFade />
      <h1>Contato</h1>
      <p>
        Precisa de ajuda para desenvolver sua ideia? Posso usar minhas habilidades para auxiliar você.
      </p>
      <Content>
        <Localize>
          <RiMapPin2Line size={"27px"} />
          <p>São Paulo - Brasil</p>
        </Localize>
        <LinksContainer>
          <Links onClick={handleEmail}>
            <RiMailOpenLine size={"47px"} />
          </Links>
          <Links onClick={handleGithub}>
            <RiLinkedinBoxFill size={"47px"} />
          </Links>
          <Links onClick={handleInstagram}>
            <RiInstagramLine size={"47px"} />
          </Links>
          <Links onClick={handleDiscord}>
            <RiDiscordLine size={"47px"} />
          </Links>
          <Links onClick={handleWhatsApp}>
            <RiWhatsappLine size={"47px"} />
          </Links>
        </LinksContainer>
      </Content>
    </Container>
  );
};

export default Contact;
