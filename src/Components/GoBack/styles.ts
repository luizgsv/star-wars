import styled from "styled-components";

export const Button = styled.button`
  
  height: fit-content;
  width: fit-content;
  
  padding: 0.5rem;

  border-radius: 50%;
  border: none;
  
  position: absolute;
  
  bottom: 1rem;

  background-color: var(--gray);

  svg path {
    fill: var(--white);
  } 
`