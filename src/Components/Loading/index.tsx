import LoadingGIF from '@src/Assets/Gif/star wars loading.gif';
import { Container } from "./styles";

/**
 * Componente Loading
 * 
 * Este componente renderiza um indicador de carregamento com uma imagem de animação GIF e um texto "Carregando...".
 * 
 * @returns {JSX.Element} - Retorna um elemento JSX que representa o indicador de carregamento.
 */
export function Loading() {
  return (
    <Container>
      <img src={LoadingGIF} />
      <span> Carregando... </span>
    </Container>
  )
}