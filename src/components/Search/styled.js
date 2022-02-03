import styled from "styled-components";

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  width: 90%;
  
  .ais-SearchBox {
    border-bottom: 1px solid;
  }

  .ais-SearchBox-input {
    padding: 5px 10px;
    width: 100%;
    height: 3rem;
    font-size: 1.2em;
    border: none;
    background: none;
  }

  .ais-Stats {
    padding: 10px 0;
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;