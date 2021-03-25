import styled from "styled-components";

export const Container = styled.div`
  max-width: 381px;
  width: 100%;
  margin-left: 49px;
  @media (max-width: 414px) {
    width: 100%;
    margin: 96px 0 0 0;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  border: 2px solid #e4e7eb;
  box-sizing: border-box;
  border-radius: 4px;

  margin-top: 88px;
`;
export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button:first-child {
    margin-right: 27px;
  }
  @media (max-width: 414px) {
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

  @media (max-width: 414px) {
    width: 100%;
  }
`;

export const MenuPayment = styled.div`
  width: 100%;
  padding: 40px;

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
export const ButtonFooter = styled.button`
  background: #f364a2;
  border-radius: 4px;
  width: 100%;
  height: 46px;
  margin-top: 118px;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
`;

export const Info = styled.div`
  border-top: 2px solid #e4e7eb;
  padding: 40px;
  width: 100%;
  span {
    display: flex;
  }
  p {
    font-size: 17px;
    color: ${(props) => props.theme.colors.gray100};
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 414px) {
    width: 100%;
    padding: 16px 16px;
  }
`;

export const FromTo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0 0;
  button {
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
  }
`;
export const In = styled.div``;
export const For = styled.div``;

export const Resume = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 15px;
    font-size: 24px;
  }
  :nth-child(2) {
    margin: 20px 0;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
`;
