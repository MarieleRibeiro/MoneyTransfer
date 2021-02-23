import { MainContainer } from "../../components/main/MainContainer"

import { Sidebar } from "../../components/Sidebar/sidebar"

import styled from 'styled-components'
export const Container = styled.div`
width: 100%;
max-width: 1440px;
background:  ${props => props.theme.colors.white300};
display: flex;
padding-left: 55px;
`

export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <MainContainer />
    </Container>
  )
}