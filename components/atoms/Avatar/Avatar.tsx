import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface IAvatarProps {
  source: string;
  alt: string;
}

const StyledDiv = styled.div`
  position: relative;
  height: 163px;
  width: 150px;
  border: 4px solid ${(props) => props.theme.colors.white};
  border-radius: 50%;
`;

const Avatar = ({ source, alt }: IAvatarProps) => {
  return (
    <StyledDiv>
      <Image
        src={source}
        layout="fill"
        alt={alt}
        style={{ borderRadius: "50%" }}
      />
    </StyledDiv>
  );
};

export default Avatar;
