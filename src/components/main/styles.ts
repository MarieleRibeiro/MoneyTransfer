import styled from 'styled-components'


export const Container = styled.div`
margin-top: 35px;
`
export const Header = styled.header`
h3 {
  font-weight: 500;
  font-size: 30px;
  color: ${(props) => props.theme.colors.black};
}
strong {
  font-weight: bold;
  font-size: 30px;
  color: ${(props) => props.theme.colors.pink200}
}
small {
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray300}
}
`
export const MainContent = styled.div`
display: flex;
justify-content: space-between;
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 45px;
  margin-top: 24px;
  background: ${(props) => props.theme.colors.white100};
  border-radius: 8px;
  margin-bottom: 28px;
  padding: 22px;

  label {
    font-weight: 400;
    font-size: 16px;
    color:  ${(props) => props.theme.colors.gray200};
  }

  select {
    background: ${(props) => props.theme.colors.white100};
    font-weight: 600;
    font-size: 16px;
    color:  ${(props) => props.theme.colors.black};
  }
}
`
export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
span {
  border-radius: 8px;
  background: ${(props) => props.theme.colors.white100};
  width: 250px;
  height: 100px;
  padding: 20px 0 0 20px;
  p {
    font-weight: normal;
    font-size: 14px;
    color:  ${(props) => props.theme.colors.gray200};
  }
  h1 {
    font-weight: 600;
    font-size: 30px;
    color:  ${(props) => props.theme.colors.black100}
  }
  small {
    font-size: 18px;
  }
}
`
export const IconRefresh = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px; 
border-radius: 50%;
background: ${(props) => props.theme.colors.white};
color:${(props) => props.theme.colors.pink200};
`
export const Footer = styled.footer`
span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 27px 0;
}
section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  width: 630px;
  height: 80px;
  border: 2px solid ${props => props.theme.colors.ice};
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 20px;
}
label {
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray100}
}

h2 {
  font-weight: 500;
  font-size: 24px;
  color:  ${(props) => props.theme.colors.black}
}
p {
  font-weight: normal;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray300}
}
h3 {
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.colors.black}
}
`