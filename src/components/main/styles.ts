import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h3 {
    font-weight: 500;
    font-size: 30px;
    color: ${(props) => props.theme.colors.black};
  }
  strong {
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.pink200};
  }
  small {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray300};
  }
`;
export const Info = styled.div`
  width: 100%;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 414px) {
    flex-direction: column;
    margin: 58px 0;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 24px;
    background: ${(props) => props.theme.colors.white100};
    border-radius: 8px;
    margin-bottom: 28px;
    padding: 15px;

    @media (max-width: 414px) {
      width: 100%;
    }

    h5 {
      font-weight: 400;
      font-size: 16px;
      color: ${(props) => props.theme.colors.gray200};
      margin: 0 5px 0 0;
    }
  }
  /* Select {
    background: ${(props) => props.theme.colors.black};
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black};
  } */
  .ant-select-selection-item {
    display: flex;
    img {
      border-radius: 50%;
      margin: 0 15px;
    }
  }
`;

export const From = styled.div`
  @media (max-width: 414px) {
    width: 100%;
  }
`;
export const Span = styled.div`
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white100};
  width: 100%;
  height: 100%;
  padding: 27px 40px 27px 27px;

  @media (max-width: 414px) {
    max-width: 381px;
    width: 100%;
  }

  p {
    font-weight: normal;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray200};
  }
  .ant-input-number-input {
    display: flex;
    padding: 0;
    font-weight: 600;
    font-size: 30px;
    color: ${(props) => props.theme.colors.black100};
  }
  small {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black100};
  }
`;
export const IconRefresh = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.pink200};
  margin: 0 20px 0 20px;

  @media (max-width: 414px) {
    margin-top: 25px;
  }
`;

export const ChooseDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 27px 0;
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
`;
export const LabelRadio = styled.div`
  padding: 23px 33px 22px 22px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.colors.ice};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.colors.gray100};

  @media (max-width: 414px) {
    padding: 0 10px;
    width: 100%;
  }

  label {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
  }

  span {
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
  }
  small {
    align-self: baseline;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  span {
    display: flex;
    align-items: center;

    @media (max-width: 414px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-width: 414px) {
    width: 100%;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};

    @media (max-width: 414px) {
      margin-bottom: 15px;
    }
  }
  p {
    font-weight: normal;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray300};
  }
  h3 {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }
  .ant-radio-group.ant-radio-group-outline {
    width: 100%;
  }
`;
