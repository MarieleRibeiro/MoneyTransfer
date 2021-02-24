import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
max-width: 1440px;
background:  ${props => props.theme.colors.white300};
display: flex;
padding: 73px 58px 0 58px;

@media (max-width: 414px) {
    width: 100%;
    flex-direction: column;
    padding: 46px 16px;
  }

`