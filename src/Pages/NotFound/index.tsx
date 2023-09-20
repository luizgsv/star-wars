import { ReactComponent as NotFoundSVG } from '@src/Assets/Img/404.svg';
import { Container } from "./styles";

export function PageNotFound() {
  return (
    <Container>
      <NotFoundSVG />
      <span>"You lost your own way my son"</span>
    </Container>
  )
}