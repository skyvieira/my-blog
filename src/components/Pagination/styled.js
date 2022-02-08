import styled from "styled-components";
import media from "styled-media-query";

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 2px var(--black);
  border-top: 2px solid var(--borders);
  border-radius: 5px;
  background: #ffffff10;
  
  & > * {
    width: 25%;
  }

  ${media.lessThan('large')`
    font-size: .9em;
  `}
`;