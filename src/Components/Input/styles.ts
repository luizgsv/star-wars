import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  align-items: center;

  gap: 1rem;
`

export const Input = styled.input`
  border: 1px solid var(--gray);
  padding: 1rem 0.5rem;

  border-radius: 0.2rem;

  background-color: var(--gray);

  color: #727888;

  width: 24rem;
  height: 2rem;

  @media(max-width: 1080px) {
    width: 20rem;
  }

  @media(max-width: 720px) {
    width: 18rem;
  }

  @media(max-width: 380px) {
    width: 16rem;
  }

`