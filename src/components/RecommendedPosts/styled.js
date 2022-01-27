import styled from "styled-components";
import { Link } from "gatsby";

export const RecommendedWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: 2px solid;
  background: #ffffff10;
`;

export const RecommendedLink = styled(Link)`
  padding: 2rem 1.5rem;
  width: 50%;
  font-size: 1.1em;
  transition: .2s;
  cursor: pointer;

  &.previous:before {
    content: '←';
    margin-right: .5rem;
  }

  &.next {
    text-align: end;
  }

  &.next:after {
    content: '→';
    margin-left: .5rem;
  }

  &:hover {
    background: #ffffff50;
  }
`;