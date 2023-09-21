import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100%;
  width: 100%;

  gap: 0.5rem;

  section {
    display: flex;
    flex-direction: row;
    
    max-height: 20rem;
   
    gap: 1rem;

    article {
      display: flex;
      flex-direction: row;
      
      padding: 0.5rem;

      flex-wrap: wrap;

      overflow: auto;

      gap: 1rem;

    }
  }

`