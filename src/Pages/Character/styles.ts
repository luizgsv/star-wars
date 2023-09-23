import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  gap: 0.5rem;

  padding: 0.5rem;

  section {
    display: flex;
    flex-direction: column;

    align-items: center;
    
    height: 24rem;

    overflow: auto;
   
    gap: 1rem;

    padding: 0.5rem;

    @media (max-width: 480px) {
      height: 20rem;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      height: 18rem;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      height: 18rem;
    }
    
    @media (min-width: 992px) and (max-width: 1199px) {
      height: 18rem;
    }

    @media (min-width: 1200px) and (max-width: 1919px) {
      height: 16rem;
    }

    @media (min-width: 1920px) {
      height: 16rem;
    }
    
    article {
      display: flex;
      flex-direction: row;
      
      justify-content: center;

      height: 100%;

      max-width: 80rem;
      
      flex-wrap: wrap;

      overflow: auto;

      gap: 1rem;

    }
  }

`