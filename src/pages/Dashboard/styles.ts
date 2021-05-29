import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
background:  ${props => props.theme.colors.white300};
display: flex;
padding: 3rem;

@media (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    padding: 3rem 1rem;
  }

`