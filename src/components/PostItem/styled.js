import styled from "styled-components";
import { Link } from "gatsby";

export const PostItemLink = styled(Link)``;

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 1.2rem 2rem;
  width: 100%;
  box-shadow: 0 0 2px;
  border-bottom: 2px solid #000;
  border-radius: 10px;
  background: #ffffff10;
`;

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.2rem;
  min-width: 4.5rem;
  height: 4.5rem;
  color: #fff;
  font: 600 1.05em system-ui;
  text-transform: uppercase;
  border-radius: 50%;
  border: 2px solid var(--black);
  text-shadow: 0 0 2px;
  background: ${props => props.background || '#333'};
`;

export const PostItemInfo = styled.div``;

export const PostItemDate = styled.time`
  padding: 2px 5px;
  color: var(--texts);
  font-size: .8em;
  font-weight: 100;
  letter-spacing: .4px;
  background: #00000020;
`;

export const PostItemTitle = styled.h1`
  margin: 8px 0 5px;
  font-size: 1.3em;
`;

export const PostItemDescription = styled.p`
  margin: 0 10px;
  padding: 0 5px;
  font-weight: 100;
  border-left: 1px solid;
`;