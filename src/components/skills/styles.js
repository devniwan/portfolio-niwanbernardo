import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url("https://64.media.tumblr.com/02f0bbcb994f785f2e43d977d1faa2f7/tumblr_p0f0gfNMsj1rnbw6mo1_1280.gifv")
    no-repeat center;
  background-size: cover;

  flex-direction: column;

  h1 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 40px;
    font-weight: 900;
  }

  p {
    z-index: 11;
    opacity: 0.7;
    text-align: center;
    max-width: 80%;
  }
`;

export const BackgroundFade = styled.div`
  height: 100vh;
  width: 100%;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));

  position: absolute;
`;

export const Content = styled.div`
  z-index: 111;
  width: 100vw;

  margin-top: 40px;
`;

export const SkillList = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0 20px;

  svg {
    opacity: 0.5;

    transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

    :hover {
      transform: scale(1.07);
      opacity: 1;
      margin: 0 10px;
    }
  }
`;
