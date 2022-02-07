import styled from "styled-components";

export const ListWrapper = styled.section`
  body#grid & {
    display: grid;
    padding: 1.5rem 0 2rem;
    grid-area: posts;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    border-bottom: 2px solid var(--borders);

    a {
      margin: 0;
    }
  }
`;