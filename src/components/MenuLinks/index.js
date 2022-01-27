import React from "react";

import * as S from "./styled";
import links from "./content";

const MenuLinks = () => (
  <S.LinkWrapper>
    <S.LinkList>
      {links.map((link, i) => (
        <S.LinkItem key={i}>
          <S.Link to={link.url}>
            {link.label}
          </S.Link>
        </S.LinkItem>
      ))}
    </S.LinkList>
  </S.LinkWrapper>
);

export default MenuLinks