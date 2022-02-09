import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PostItemLink = styled(AniLink)`
  display: flex;
  margin: 12px 0;
  box-shadow: 0 0 2px var(--black);
  border-bottom: 2px solid var(--borders);
  border-radius: 10px;
  background: #ffffff10;
`;

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: .8rem 2rem;
  width: 100%;

  body#grid & {
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
    border: none;
  }

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: flex-start;
    padding: .8rem 1.5rem;
  `}
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.2rem 5px 0;
  min-width: 4.5rem;
  height: 4.5rem;
  color: #fff;
  font: 600 1.05em system-ui;
  text-transform: uppercase;
  border-radius: 50%;
  border: 2px solid var(--black);
  text-shadow: 0 0 2px;
  background: ${props => props.background || '#333'};

  ${media.lessThan('large')`
    height: auto;
    font-size: .9em;
    border-radius: 4px;
  `}
`;

export const PostItemInfo = styled.div``;

export const PostItemDate = styled.time`
  padding: 2px 5px;
  color: var(--texts);
  font-size: .8em;
  font-weight: 100;
  letter-spacing: .5px;
  background: #00000020;
`;

export const PostItemTitle = styled.h1`
  margin: 10px 0 5px;
  font-size: 1.35em;

  body#grid & {
    line-height: 1.1;
    margin: .8rem 0;
  }
`;

export const PostItemDescription = styled.p`
  margin-left: 5px;
  padding-left: 5px;
  font-weight: 100;
  border-left: 1px solid;
`;