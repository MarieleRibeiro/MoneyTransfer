import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* max-width: 283px; */
  padding: "1rem";
  height: auto;
  

  p {
    font-weight: normal;
    color: ${(props) => props.theme.colors.gray300};
  }
  a {
    display: flex;
    align-items: center;
    margin-top: 1.75rem;
    font-style: normal;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black};
    :hover {
      color: ${(props) => props.theme.colors.pink200};
    }
  }
  img {
    width: 60px;
    height: 60px;
  }

  h3 {
    padding-top: 1.125rem;
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    span {
      margin-left: 1rem;
    }
  }
`;
export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 3.5rem;

  svg {
    margin-right: 1rem;
  }

  @media (max-width: 960px) {
    display: none;
  }

  :hover,
  [data-active] {
    color: ${(props) => props.theme.colors.pink200};
  }
`;
export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.25rem;
`;
