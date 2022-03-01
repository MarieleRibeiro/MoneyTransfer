import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: 3rem;
  height: auto;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;
export const Wrapper = styled.div`
  /* width: 100%; */
  border: 2px solid #e4e7eb;
  box-sizing: border-box;
  border-radius: 4px;

  margin-top: 2rem;
`;
export const Menu = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button:first-child {
    margin-right: 1.75rem;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const MenuPayment = styled.div`
  /* width: 100%; */
  padding: 2rem;

  h3 {
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};
  }
  small {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray200};
  }
  h6 {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const FromTo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
  }
`;
export const ButtonFooter = styled.button`
  background: #f364a2;
  border-radius: 4px;
  width: 100%;
  height: 46px;
  margin-top: 5.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.white};
`;

export const Info = styled.div`
  border-top: 2px solid #e4e7eb;
  padding: 2rem 1rem;
  width: 100%;
  span {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray100};
  }
  h2 {
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 960px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const In = styled.div``;
export const For = styled.div``;

export const Resume = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 0.75rem;
  }

  svg {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  :nth-child(2) {
    margin: 1.25rem 0;
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;
