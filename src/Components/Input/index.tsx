import { ChangeEvent } from "react";
import { Input } from "./styles";

interface IInput {
  placeholder?: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputComponent({ placeholder = 'Buscar dados', handleSearch, ...props }: IInput) {
  
  return (
    <Input
      type="text"
      placeholder={placeholder} {...props}
      onChange={handleSearch}
     />
  )
}