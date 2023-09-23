import { IInput } from "@src/Models/Interfaces/input";
import { Input } from "./styles";

/**
 * Componente InputComponent
 * 
 * Este componente renderiza um elemento de entrada (input) que pode ser usado para buscar dados.
 * 
 * @param {string} placeholder - O texto de espaço reservado (placeholder) opcional para o input.
 * @param {function} handleSearch - A função de callback que será chamada quando o conteúdo do input mudar.
 * @returns {JSX.Element} - Retorna um elemento JSX que representa o input.
 */
export function InputComponent({ placeholder = 'Buscar dados', handleSearch, ...props }: IInput) {
  
  return (
    <Input
      type="text"
      placeholder={placeholder} {...props}
      onChange={handleSearch}
     />
  )
}