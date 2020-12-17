import { MainContainer } from "../../components/main/MainContainer"
import { Container } from "../../components/Sidebar/styles"
import { Content, Header, Main } from "../../components/main/styles"
import { Sidebar } from "../../components/Sidebar/sidebar"
export default function Dashboard() {
  return (
    <Container>
      <Sidebar />

      <MainContainer />
      <Content />
      <Header />
      <Main />
    </Container>
  )
}