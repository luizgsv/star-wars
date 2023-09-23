import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ICard } from "@src/Models/Interfaces/card";

/**
 * Componente Card
 * 
 * @param {string} value - O valor no card.
 * @param {string} link - O link para o qual o card redirecionará.
 * @param {string} request - A URL de solicitação para criar o link.
 * @returns {JSX.Element} - Retorna um elemento JSX que representa o card.
 */
export function Card({ value, link, request }: ICard) {
  
  // const que armazena o id retirado da request
  const cutIdToNavigated = request.split('/').at(-2)
  
  // junção do link de navegação com o parâmetro id
  const linkNavigate = `${link}/${cutIdToNavigated}`
  
  return (
    <Link to={linkNavigate}>
      <Container>
        <span>{ value }</span>
      </Container>
    </Link>
  )
}