import { ChangeEvent } from "react";

export interface IInput {
  placeholder?: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}