import styled from "styled-components";
import media from "styled-media-query";

export const AboutWrapper = styled.section`
  margin: 0 auto;
  padding: 3rem 0;
  max-width: 50rem;
  width: 100%;

  nav > ul {
    justify-content: flex-start;
  }

  ${media.lessThan('large')`
    padding: 1rem 0;
    font-size: .7rem;
  `}
`;

export const Content = styled.div`
  font-size: 1.3em;

  nav {
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
`;

export const About = styled.div`
  line-height: 1.6;

  p {
    padding: .5rem 0;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 1rem;
  font-size: 1.5em;
`;

export const SkillList = styled.ul`
  padding: 0 2rem 1rem;
`;

export const Skill = styled.li`
  margin: 1rem 0;
  list-style: square;
`;