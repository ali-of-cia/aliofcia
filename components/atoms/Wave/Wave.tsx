import React from "react";
import styled from "styled-components";

const StyledWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  & svg {
    margin-bottom: -6px;
  }
`;

const Wave = () => {
  return (
    <StyledWave>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L80,154.7C160,181,320,235,480,229.3C640,224,800,160,960,138.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </StyledWave>
  );
};

export default Wave;
