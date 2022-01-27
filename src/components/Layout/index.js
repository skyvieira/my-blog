import * as React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";
import GlobalStyles from "../../styles/global";
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar";

const Layout = ({ children }) => (
  <S.Wrapper>
    <GlobalStyles />
    <Sidebar />
    <S.Main>{children}</S.Main>
    <MenuBar />
  </S.Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout