import * as React from "react";
import { TransitionPortal } from "gatsby-plugin-transition-link";
import PropTypes from "prop-types";

import * as S from "./styled";
import GlobalStyles from "../../styles/global";
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar";

const Layout = ({ children }) => (
  <S.Wrapper>
    <GlobalStyles />
    <TransitionPortal level='top'>
      <Sidebar />
    </TransitionPortal>
    <S.Main>{children}</S.Main>
    <TransitionPortal level='top'>
      <MenuBar />
    </TransitionPortal>
  </S.Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout