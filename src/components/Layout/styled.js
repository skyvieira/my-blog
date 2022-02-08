import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  display: flex;
  justify-content: end;
  color: var(--texts);
  background: var(--background);

  // background: #0f0c29;
  // background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);
  // background: linear-gradient(to left, #24243e, #302b63, #0f0c29);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 3rem;
  padding: 0 2.5rem;
  width: calc(80% - 3rem);
  min-height: 100vh;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }

  ${media.lessThan('large')`
    margin: 0;
    padding: 5rem 1rem 3rem;
    width: 100%;
    font-size: .85rem;
  `}
`;