import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 2rem;

  margin-bottom: 2rem;
`

export const Title = styled.h1`
  color: var(--black);
  font-size: 4rem;
  text-shadow: var(--star-wars-shadow);
`

export const SubTitle = styled.h2`
  font-size: 2rem;
`