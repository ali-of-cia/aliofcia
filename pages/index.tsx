import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Banner from "../components/molecules/Banner/Banner";
import Footer from "../components/molecules/Footer/Footer";

const StyledMain = styled.main`
  width: 100%;
`;

const StyledIntroWrapper = styled.div`
  padding: 42px 124px 80px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alicia Suttie Personal Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        <Banner />

        <StyledIntroWrapper>
          <p>
            I love building accessible and easy to use products. I live in North
            Vancouver with my partner and elderly cat, Sneaker. When I am not
            coding I am swordfighting at my local HEMA club or immersing myself
            in yogic philosophy.
          </p>
        </StyledIntroWrapper>
      </StyledMain>
      <Footer />
    </div>
  );
};

export default Home;
