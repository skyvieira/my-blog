import React from "react";

import * as S from "./styled";
import { HomeAlt, SearchAlt, Adjust, ArrowToTop } from "@styled-icons/boxicons-regular";
import { Grid } from "@styled-icons/bootstrap/Grid";

const MenuBar = () => (
  <S.BarWrapper>
    <S.BarGroup>
      <S.Link to='/' title="Voltar para a Home">
        <S.BarItem>
          <HomeAlt />
        </S.BarItem>
      </S.Link>
      <S.Link to='/search' title="Pesquisar">
        <S.BarItem>
          <SearchAlt />
        </S.BarItem>
      </S.Link>
    </S.BarGroup>

    <S.BarGroup>
      <S.BarItem title="Alterar o tema">
        <Adjust />
      </S.BarItem>
      <S.BarItem title="Alterar visualização">
        <Grid />
      </S.BarItem>
      <S.BarItem title="Voltar para o topo">
        <ArrowToTop />
      </S.BarItem>
    </S.BarGroup>
  </S.BarWrapper>
);

export default MenuBar