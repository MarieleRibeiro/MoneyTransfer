import { MainContainer } from "../../components/main/MainContainer"
import { Sidebar } from "../../components/Sidebar/sidebar";
import { Details } from "../../components/details/Details";

import { Container } from './styles'

export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <MainContainer />
      <Details />
    </Container>
  )
}