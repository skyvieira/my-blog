import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const BarWrapper = styled.aside`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  width: 3rem;
  height: 100vh;
`;

export const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
  font-weight: 300;

  button,
  a {
    text-align: center;
    cursor: pointer;
  }
`;

export const BarItem = styled.button`
  margin: .5rem 0;
  width: 60%;
  color: var(--texts);
  border: none;
  background: none;
  transition: .4s;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`;

export const Link = styled(GatsbyLink)`
  width: 100%;
  text-decoration: none;
`;