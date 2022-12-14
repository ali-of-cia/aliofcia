import React from "react";
import styled from "styled-components";

import SocialLink from "../../atoms/SocialLink/SocialLink";

const StyledFooter = styled.div`
  height: 100%;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding-bottom: 24px;
`;

const StyledLinkWrapper = styled.div`
  padding: 0px 4px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledIconsWrapper>
        <StyledLinkWrapper>
          <SocialLink
            src="/assets/images/githubIcon.svg"
            text="github"
            link="https://github.com/ali-of-cia"
          />
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <SocialLink
            src="/assets/images/envelopeIcon.svg"
            text="email"
            link="mailto:aliciasuttie@proton.me"
          />
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <SocialLink
            src="/assets/images/linkedinIcon.svg"
            text="linkedin"
            link="https://www.linkedin.com/in/aliofcia/"
          />
        </StyledLinkWrapper>
      </StyledIconsWrapper>
    </StyledFooter>
  );
};

export default Footer;
