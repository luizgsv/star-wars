import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 1rem;

  margin: 1rem 2rem 0 0;

  z-index: 999;
  position: absolute;
`

export const Title = styled.h1`
  color: var(--black);
  font-size: 4rem;
  text-shadow: var(--star-wars-shadow);
  text-align: center;

  @media(max-width: 1080px) {
    font-size: 3.5rem;
  }
  @media(max-width: 720px) {
    font-size: 2.5rem;
  }

  @media(max-width: 380px) {
    font-size: 1%.5;
  }
  
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`