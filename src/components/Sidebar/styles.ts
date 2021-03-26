import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 283px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 283px;
  p {
    font-weight: normal;
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray300};
  }
  a {
    display: flex;
    align-items: center;
    margin-top: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
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
    padding-top: 19px;
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 1056px) {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 43px;
    span {
      margin-left: 16px;
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
  margin-left: 35px;

  svg {
    margin-right: 16px;
  }

  @media (max-width: 1056px) {
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
  margin-top: 100px;
`;
