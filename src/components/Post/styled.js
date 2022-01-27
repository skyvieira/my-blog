import styled from "styled-components";

export const PostHeader = styled.header`
  margin: 0 auto;
  max-width: 50rem;
  padding: 5rem 0 3rem;
`;

export const PostTitle = styled.h1`
  padding: 2.5rem 0 1rem;
  font-size: 4em;
  font-weight: 800;
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
  max-width: 50rem;
  font-size: 1.3em;

  img {
    margin: 2rem 0;
    max-width: 50rem;
  }
`;