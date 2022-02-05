import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: end;
  color: var(--texts);
  background: var(--mediumBackground);

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
  border: 3px solid var(--borders);
  box-shadow: inset 0 0 5px #000;
  background: var(--background);
`;