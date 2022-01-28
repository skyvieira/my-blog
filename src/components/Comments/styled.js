import styled from "styled-components";

export const CommentsWrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 50rem;
  padding: 3rem 0;

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: #1fa1f2 !important;
    }
  }
`;

export const CommentsTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2em;
`;