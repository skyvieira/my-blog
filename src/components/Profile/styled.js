import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Profile = styled(AniLink)`
  ${media.lessThan('large')`
    display: flex;
    font-size: .8rem;
    text-align: left;
  `}
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h1`
  padding-top: 5px;
  font-size: 1.4em;
`;

export const Position = styled.h2`
  font-size: 1.1em;
  font-weight: 500;
`;

export const Description = styled.p`
  padding: 1.5rem 0 1rem;
  width: 80%;
  font-weight: 100;

  ${media.lessThan('large')`
    display: none;
  `}
`;