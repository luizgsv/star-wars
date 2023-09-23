import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 14rem;
  height: 10rem;

  background: var(--gray);
  
  border: 2px solid transparent;

  transition: .2s all;

  @media(max-width: 1080px) {
    width: 14rem; 
    height: 10rem;
  }

  @media(max-width: 720px) {
    width: 12rem; 
    height: 8rem;
  }

  @media(max-width: 380px) {
    width: 10rem; 
    height: 6rem;
  }

  &:hover, :focus {
    border: 2px solid var(--yellow);
  }

  span {
    color: var(--white);
    font-size: 1.5rem;
    text-align: center;

    user-select: none;

    @media(max-width: 1080px) {
      font-size: 1rem;
    }

    @media(max-width: 720px) {
      font-size: 1rem;
    }

    @media(max-width: 380px) {
      font-size: 1rem;
    }
  }
`