import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const BarWrapper = styled.aside`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  width: 3rem;
  height: 100vh;
  box-shadow: inset 0 0 2px var(--black);
  background: var(--mediumBackground);
  z-index: 2;

  ${media.lessThan('large')`
    bottom: 0;
    flex-direction: row;
    width: 100%;
    height: 3rem;
  `}
`;

export const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
  font-weight: 300;

  button,
  a {
    text-align: center;
    cursor: pointer;
  }

  ${media.lessThan('large')`
    flex-direction: row;

    #list {
      display: none;
    }
  `}
`;

export const BarItem = styled.button`
  margin: .5rem 0;
  width: 60%;
  color: var(--texts);
  border: none;
  background: none;
  transition: .4s;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    margin: .5rem;
    width: 1.5rem;
  `}
`;

export const Link = styled(AniLink)`
  width: 100%;
  text-decoration: none;
`;