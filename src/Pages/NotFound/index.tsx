import { ReactComponent as NotFoundSVG } from '@src/Assets/Img/404.svg';
import { Container, Button} from "./styles";
import { useNavigate } from 'react-router-dom';

/**
 * Componente PageNotFound
 * 
 * Este componente representa a página exibida quando uma página não é encontrada (erro 404).
 * 
 * @returns {JSX.Element} - Retorna um elemento JSX que representa a página de erro 404.
 */
export function PageNotFound() {

  const navigate = useNavigate();
  
  return (
    <Container>
      <NotFoundSVG />
      <span>"You lost your own way my son"</span>
      <Button onClick={()=> navigate('/home')}>
        Navegar
      </Button>
    </Container>
  )
}