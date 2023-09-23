import { CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './styles';

/**
 * Componente GoBack
 * 
 * Este componente renderiza um botão que permite ao usuário navegar para a página anterior.
 * 
 * @returns {JSX.Element} - Retorna um elemento JSX que representa o botão de retorno.
 */
export function GoBack() {
  
  const navigate = useNavigate();

  return (
    <Button onClick={()=> navigate(-1)}>
      <CornerDownLeft />
    </Button>
  )
}