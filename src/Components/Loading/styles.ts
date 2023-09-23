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
    width: 30rem;
    object-fit: cover;  
    
    @media(max-width: 1080px) {
      height: auto; 
      width: 20rem;
    }

    @media(max-width: 720px) {
      height: auto;
      width: 16rem;
    }

    @media(max-width: 380px) {
      height: auto;
      width: 14rem;
    }
  }

  span {
    color: var(--black);
    font-size: 4rem;

    @media(max-width: 1080px) {
      font-size: 3.5rem;
    }

    @media(max-width: 720px) {
      font-size: 2.5rem;
    }

    @media(max-width: 380px) {
      font-size: 2rem;
    }
  }
`