import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 14rem; // 224px
  height: 10rem; // 160px

  background: var(--gray);
  
  border: 2px solid transparent;

  transition: .2s all;

  &:hover, :focus {
    border: 2px solid var(--yellow);
  }

  span {
    color: var(--white);
    font-size: 1.5rem;
    text-align: center;

    user-select: none;
  }
  

`