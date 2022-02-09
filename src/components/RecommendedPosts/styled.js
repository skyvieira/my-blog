import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const RecommendedWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: 3px solid var(--borders);
  border-bottom: 3px solid var(--borders);
  background: #00000010;
`;

export const RecommendedLink = styled(AniLink)`
  padding: 2rem 1.5rem;
  width: 50%;
  font-size: 1.1em;
  transition: .2s;
  cursor: pointer;

  &.previous:before {
    content: '←';
    margin-right: .5rem;
  }

  &.next {
    text-align: end;
  }

  &.next:after {
    content: '→';
    margin-left: .5rem;
  }

  &:hover {
    background: #00000005;
  }

  ${media.lessThan('large')`
    padding: 1rem .5rem;
  `}
`;