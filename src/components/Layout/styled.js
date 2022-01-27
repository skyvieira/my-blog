import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: end;

  // background: #0f0c29;
  // background: -webkit-linear-gradient(to left, #24243e, #302b63, #0f0c29);
  // background: linear-gradient(to left, #24243e, #302b63, #0f0c29);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 2.5rem;
  width: calc(80% - 2.5rem);
  min-height: 100vh;
  border: 3px solid;
  box-shadow: inset 0 0 10px #00000080;
  background: #BDC696;
`;