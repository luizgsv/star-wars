import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Card({ value, link, request }: { value: string, link: string, request: string }) {
  
  const cutIdToNavigated = request.split('/').at(-2)
  
  const linkNavigate = `${link}/${cutIdToNavigated}`
  
  return (
    <Link to={linkNavigate}>
      <Container>
        <span>{ value }</span>
      </Container>
      </Link>
  )
}