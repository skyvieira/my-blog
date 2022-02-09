import React from "react";

import * as S from "./styled";
import links from "./content";
import getThemeColor from "../../utils/getThemeColor";

const MenuLinks = () => (
  <S.LinkWrapper>
    <S.LinkList>
      {links.map((link, i) => (
        <S.LinkItem key={i}>
          <S.Link
            to={link.url}
            cover
            direction='left'
            bg={getThemeColor()}
            duration={0.6}
          >
            {link.label}
          </S.Link>
        </S.LinkItem>
      ))}
    </S.LinkList>
  </S.LinkWrapper>
);

export default MenuLinks