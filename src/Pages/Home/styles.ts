import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  
  height: 100%;
  width: 100%;

  padding: 0 4rem;

  position: relative;

  nav {
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;

      gap: 0.5rem;

      li {
        font-size: 2rem;
        transition: .2s all;
      }

      :has(:hover, :focus) {
        color: var(--black);
        text-shadow: var(--star-wars-shadow);
      }
    }
  }

  section.image-area {
    display: flex;

    align-items: end;
    justify-content: flex-end;

    height: 100%;
    width: fit-content;

    top: 2rem;
    right: 1rem;
    position: absolute;

    svg {
      height: 80%;
      width: auto;
      object-fit: cover;  
    }
  }

`