import styled from "styled-components";
import { Link } from "gatsby";

export const PostItemLink = styled(Link)``;

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  width: 100%;
  border-bottom: 2px solid;
  background: #ffffff10;
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  min-width: 5rem;
  height: 5rem;
  color: #fff;
  font: 600 1.1em system-ui;
  text-transform: uppercase;
  border-radius: 50%;
  border: 2px solid #000;
  text-shadow: 0 0 3px;
  background: ${props => props.background || '#eee'};
`;

export const PostItemInfo = styled.div`

`;

export const PostItemDate = styled.time`
  padding: 2px 5px;
  font-size: .8em;
  background: #00000020;
`;

export const PostItemTitle = styled.h1`
  margin: 10px 0 5px;
  font-size: 1.3em;
`;

export const PostItemDescription = styled.p`
  margin: 0 10px;
  padding: 0 5px;
  border-left: 1px solid;
`;