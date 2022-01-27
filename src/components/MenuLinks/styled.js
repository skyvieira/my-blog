import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const LinkWrapper = styled.nav``;

export const LinkList = styled.ul`
  font-size: 1.2em;
  font-weight: 300;
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
`;

export const LinkItem = styled.li`
  padding: .5rem 0;
`;