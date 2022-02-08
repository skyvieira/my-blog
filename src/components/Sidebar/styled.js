import styled from "styled-components";
import media from "styled-media-query";

export const SidebarWrapper = styled.aside`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 10px;
  width: 20%;
  height: 100%;
  text-align: center;
  box-shadow: inset 0 0 2px var(--black);
  background: var(--mediumBackground);

  ${media.lessThan('large')`
    align-items: flex-start;
    padding: .5rem 3rem;
    width: 100%;
    height: auto;
  `}
`;