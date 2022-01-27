import styled from "styled-components";

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 10px;
  text-align: center;
  border-top: 2px solid;
  background: #ffffff10;
  
  & > * {
    width: 15%;
  }
`;