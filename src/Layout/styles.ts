import styled from "styled-components";

interface ILayout {
  isLoading: boolean
}

export const Layout = styled.div<ILayout>`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  position: relative;

  ${({ isLoading })=> isLoading && 'opacity: 40%'}

  > div {
    padding: 0.875rem; // 14 pixels
  }
`