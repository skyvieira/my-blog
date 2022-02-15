import styled from "styled-components";
import media from "styled-media-query";

export const Avatar = styled.figure`
  margin: 0 auto;
  width: 80px;
  height: 80px;

  .image {
    width: 100%;
    border-radius: 50%;
    border: 2px solid var(--black);
  }

  ${media.lessThan('large')`
    margin-right: 10px;
    width: 60px;
    height: 60px;
  `}
`;