import styled from 'styled-components'
export const Container = styled.div`

`

export const Perfil = styled.div`
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
}
img {
  margin-top: 30px; 
  width: 60px;
  height: 60px;
}

h3 {
  padding-top: 19px ;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.colors.black}
}
`

export const MenuItem = styled.div`
display: flex;
flex-direction: column;

`
export const MenuFooter = styled.div`
display: flex;
flex-direction: column;
margin-top: 100px;
`




