import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  position: absolute;

  background-color: #FFF;

  opacity: 70%;

  width: 100vw;
  height: 100vh;

  z-index: 9999;

  overflow: hidden;

  gap: 1rem;

  img {
    height: auto;
    width: 20%;
    object-fit: cover;  
  }

  span {
    color: var(--black);
    font-size: 4rem;
  }
`