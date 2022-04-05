import Container from "../../Components/Container"
import ContentBox from "../../Components/ContentBox"
import * as Styled from "./Hero/styles"

function Home() {
  return (
    <Styled.Hero>
      <Container>
        <ContentBox>Test</ContentBox>
      </Container>
    </Styled.Hero>
  )
}

export default Home