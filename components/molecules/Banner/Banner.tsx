import React from "react";
import styled from "styled-components";

import Avatar from "../../atoms/Avatar/Avatar";
import Wave from "../../atoms/Wave/Wave";
import Spark from "../../../public/assets/images/Spark.jpg";

const StyledBanner = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: linear-gradient(
      180deg,
      ${(props) => props.theme.colors.purple},
      ${(props) => props.theme.colors.mauve}
    ),
    url(${Spark.src});
  background-blend-mode: screen;
  color: ${(props) => props.theme.colors.white};
`;

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 64px;

  & h1 {
    margin: 24px 0px 0px 0px;
    text-shadow: ${(props) => props.theme.textShadow};
  }

  & p {
    font-weight: bold;
    text-shadow: ${(props) => props.theme.textShadow};
  }
`;

const StyledAvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <StyledTextWrapper>
        <h1>Hi 👋 I{`'`}m Alicia Suttie</h1>
        <p>I work as a Frontend Software Engineer</p>
      </StyledTextWrapper>

      <Wave />
      <StyledAvatarWrapper>
        <Avatar source="/assets/images/Alicia.jpeg" alt="" />
      </StyledAvatarWrapper>
    </StyledBanner>
  );
};

export default Banner;
