import styled from "styled-components";
import media from "styled-media-query";

export const PostHeader = styled.header`
  margin: 0 auto;
  max-width: 50rem;
  width: 100%;
  padding-top: 8rem;

  ${media.lessThan('large')`
    padding-top: 1rem;
    font-size: .7rem;
  `}
`;

export const PostTitle = styled.h1`
  padding: 1.5rem 0 .8rem;
  font-size: 4em;
  font-weight: 800;
  line-height: 1.3;
`;

export const PostDescription = styled.h2`
  font-size: 2em;
  font-weight: 300;
`;

export const PostDate = styled.p`
  display: inline;
  padding: 2px 5px;
  font-size: 1.1em;
  background: #00000020;
`;

export const Content = styled.section`
  margin: 0 auto;
  padding: 3rem 0 5rem;
  max-width: 50rem;
  font-size: 1.3em;

  h2,
  h3,
  h4 {
    margin: 3rem 0 1rem;
  }

  ul,
  .gatsby-highlight {
    padding: 1rem 0;

    ${media.lessThan('large')`
      font-size: .7rem;
    `}
  }

  p {
    line-height: 1.6;
  }

  a {
    color: var(--highlight);
    transition: .4s;

    &:hover {
      filter: hue-rotate(90deg);
    }
  }

  .gatsby-resp-image-wrapper {
    margin: 3rem 0;
    overflow: hidden;

    img {
      transition: all 0.5s ease 0s !important;
    }
  }

  .gatsby-resp-image-wrapper:hover img {
    transform: scale(1.1) translate(0,-4%);
  }

  ${media.lessThan('large')`
    padding: 2rem 0;
  `}
`;