import React, { useState, useEffect } from "react";

import * as S from "./styled";
import getThemeColor from "../../utils/getThemeColor";
import {
  HomeAlt as Home,
  SearchAlt as Search,
  Adjust as Light,
  ArrowToTop
} from "@styled-icons/boxicons-regular";
import {
  Grid3x3GapFill as Grid,
  ViewList as List
} from "@styled-icons/bootstrap";

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <S.BarWrapper>
      <S.BarGroup>
        <S.Link
          to='/'
          cover
          direction='right'
          bg={getThemeColor()}
          duration={0.6}
          title="Voltar para a Home"
        >
          <S.BarItem>
            <Home />
          </S.BarItem>
        </S.Link>
        <S.Link
          to='/search/'
          cover
          direction='right'
          bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar"
        >
          <S.BarItem>
            <Search />
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
          <Light />
        </S.BarItem>
        <S.BarItem
          title="Alterar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
          id={display}
        >
          {isListMode
            ? <List />
            : <Grid />
          }
        </S.BarItem>
        <S.BarItem onClick={() => window.scrollTo(0, 0)} title="Voltar para o topo">
          <ArrowToTop />
        </S.BarItem>
      </S.BarGroup>
    </S.BarWrapper>
  );
};

export default MenuBar