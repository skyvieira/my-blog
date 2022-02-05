import React, { useState, useEffect } from "react";

import * as S from "./styled";
import { HomeAlt, SearchAlt, Adjust, ArrowToTop } from "@styled-icons/boxicons-regular";
import { Grid } from "@styled-icons/bootstrap/Grid";

const MenuBar = () => {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
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
        <S.BarItem
          title="Alterar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
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
};

export default MenuBar