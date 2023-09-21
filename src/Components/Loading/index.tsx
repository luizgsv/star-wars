import LoadingGIF from '@src/Assets/Gif/star wars loading.gif';
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <img src={LoadingGIF} />
      <span> Carregando... </span>
    </Container>
  )
}