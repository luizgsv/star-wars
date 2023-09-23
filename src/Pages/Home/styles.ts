import styled from "styled-components";

interface IsActive {
  isActive: boolean
}

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

        @media(max-width: 1080px) {
          font-size: 1.5rem;
        }

        @media(max-width: 720px) {
          font-size: 1.5rem;
        }

        @media(max-width: 380px) {
          font-size: 1.5rem;
        }
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

    width: fit-content;

    bottom: 0;
    right: 1rem;
    position: absolute;

    svg {
      height: 30rem;
      width: auto;
      object-fit: cover;  
    }

    @media(max-width: 1080px) {

      svg {
        height: 22rem;
      }
    }

    @media(max-width: 720px) {

      svg {
        height: 18rem;
      }
    }

    @media(max-width: 380px) {
      svg {
        height: 16rem;
      }
    }
  }

`

export const Li = styled.li<IsActive>`
  font-size: 2rem;
  transition: .2s all;

  cursor: pointer;

  ${({ isActive })=> !isActive && 'cursor: not-allowed'}

`