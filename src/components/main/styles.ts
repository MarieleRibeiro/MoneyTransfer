import styled from "styled-components";
import 'antd/dist/reset.css';


export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h3 {
    font-weight: 500;
    font-size: 1.75rem;
    color: ${(props) => props.theme.colors.black};
  }
  strong {
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.pink200};
  }
  small {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray300};
  }
`;
export const Info = styled.div`
  width: 100%;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 1.5rem;
    background: ${(props) => props.theme.colors.white100};
    border-radius: 8px;
    margin-bottom: 1.75rem;
    padding: 1rem;

    @media (max-width: 960px) {
      width: 100%;
    }

    h5 {
      font-weight: 400;
      font-size: 1rem;
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
      margin: 0 1rem 0 0;
    }
  }
`;

export const From = styled.div`
  @media (max-width: 960px) {
    width: 100%;
  }
  img {
    object-fit: contain;
  }
`;
export const Span = styled.div`
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white100};
  width: 100%;
  height: 100%;
  padding: 1.75rem 2.5rem 1.75rem 1.75rem;

  @media (max-width: 960px) {
    width: 100%;
  }

  p {
    font-weight: normal;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray200};
  }
  .ant-input-number-input {
    display: flex;
    padding: 0;
    font-weight: 600;
    font-size: 1.75rem;
    color: ${(props) => props.theme.colors.black100};
  }
  small {
    font-size: 1rem;
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
  margin: 0 1.25rem 0 1.25rem;

  @media (max-width: 960px) {
    margin-top: 1.125rem;
  }
`;

export const ChooseDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1.5rem 0;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.black};

  .ant-picker-input > input {
    font-size: 0.875rem;
    font-weight: 600;
    width: 5.6rem;
  }
`;
export const LabelRadio = styled.div`
  padding: 1rem;
  margin-bottom: 1.25rem;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.colors.ice};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.colors.gray100};

  @media (max-width: 960px) {
    padding: 0 0.625rem;
    width: 100%;
  }

  label {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
  }

  span {
    flex-direction: column;
    font-weight: 500;
    font-size: 1.125rem;

    @media (max-width: 960px) {
      font-size: 0.875rem;
    }
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

    @media (max-width: 960px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
  }

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.black};

    @media (max-width: 960px) {
      margin-bottom: 1rem;
    }
  }
  p {
    font-weight: normal;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray300};
  }
  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.black};

    @media (max-width: 960px) {
      font-size: 0.75rem;
    }
  }
  .ant-radio-group.ant-radio-group-outline {
    width: 100%;
  }
`;
