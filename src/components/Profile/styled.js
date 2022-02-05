import styled from "styled-components";
import { Link } from "gatsby";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Info = styled(Link)``;

export const Name = styled.h1`
  padding-top: 5px;
  font-size: 1.3em;
`;

export const Position = styled.h2`
  font-size: 1.1em;
`;

export const About = styled.p`
  padding: 1.5rem 0 1rem;
  width: 80%;
`;