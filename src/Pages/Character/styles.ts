import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  gap: 0.5rem;

  section {
    display: flex;
    flex-direction: row;

    align-items: center;
    
    height: 24rem;

    overflow: auto;
   
    gap: 1rem;

    article {
      display: flex;
      flex-direction: row;
      
      justify-content: center;

      height: 100%;
      
      padding: 0.5rem;

      flex-wrap: wrap;

      overflow: auto;

      gap: 1rem;

    }
  }

`