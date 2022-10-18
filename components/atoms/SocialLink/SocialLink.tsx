import React from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: transparent;
  padding: 4px;
  border: 0px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.offBlack};

  & span {
    padding: 1.5px 0px 0px 4px;
    font-family: "Roboto mono";
    font-size: 14px;
    text-transform: capitalize;
  }
`;

interface ILinkProps {
  src: string;
  text: string;
  link: string;
}

const SocialLink = ({ src, text, link }: ILinkProps) => {
  return (
    <StyledLink href={link} target="_blank">
      <Image width="24px" height="24px" alt="" src={src} aria-hidden="true" />
      <span>{text}</span>
    </StyledLink>
  );
};

export default SocialLink;
