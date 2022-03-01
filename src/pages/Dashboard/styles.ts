import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.white300};
  display: flex;
  padding: 3rem;

  @media (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    padding: 3rem 1rem;
  }

  /* @media (min-width: 1440px) {
   
    margin: 50% auto;
  } */
`;
