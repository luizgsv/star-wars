import { Container, SubTitle, Title } from "./styles";

export function Header({ subTitle = 'seja bem-vindo(a)' }: { subTitle?: string }) {

  return (
    <Container>
      <Title>Star wars character</Title>
      <SubTitle>{ subTitle }</SubTitle>
    </Container>
  )
}