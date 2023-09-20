import { ReactComponent as Reply } from '@src/Assets/Icons/reply.svg';
import { useNavigate } from 'react-router-dom';
import { Button } from './styles';

export function GoBack() {
  
  const navigate = useNavigate();

  return (
    <Button onClick={()=> navigate(-1)}>
      <Reply />
    </Button>
  )
}