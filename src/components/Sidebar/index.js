import React from "react";

import * as S from "./styled";
import Profile from "../Profile";
import Social from "../Social";
import MenuLinks from "../MenuLinks";

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <Social />
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar