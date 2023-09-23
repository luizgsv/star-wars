import { ButtonStyle } from "@src/Components/Button/styles";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;

  gap: 1rem;

  span {
    font-size: 2rem;
  }
`

export const Button = styled(ButtonStyle)``