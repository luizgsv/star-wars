import { CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './styles';

export function GoBack() {
  
  const navigate = useNavigate();

  return (
    <Button onClick={()=> navigate(-1)}>
      <CornerDownLeft />
    </Button>
  )
}