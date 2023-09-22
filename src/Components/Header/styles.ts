import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 2rem;

  margin-bottom: 2rem;

  z-index: 999;
  position: absolute;

`

export const Title = styled.h1`
  color: var(--black);
  font-size: 4rem;
  text-shadow: var(--star-wars-shadow);
  text-align: center;
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`