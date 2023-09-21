import { Link } from "react-router-dom";
import { Container, SubTitle, Title } from "./styles";

export function Header({ subTitle = 'seja bem-vindo(a)' }: { subTitle?: string }) {

  return (
    <Container>
      <Link to={'/'}>
        <Title>Star wars character</Title>
      </Link>
      <SubTitle>{ subTitle }</SubTitle>
    </Container>
  )
}