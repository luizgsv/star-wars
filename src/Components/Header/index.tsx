import { Link } from "react-router-dom";
import { Container, SubTitle, Title } from "./styles";

/**
 * Componente Header
 * 
 * Este componente renderiza o cabeçalho da página com um título principal e um subtítulo.
 * 
 * @param {string} subTitle - O subtítulo opcional para exibir.
 * @returns {JSX.Element} - Retorna um elemento JSX que representa o cabeçalho.
 */
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