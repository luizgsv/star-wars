import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  padding: 0.5rem;

  section {
    display: flex;
    flex-direction: row;
    
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 481px) and (max-width: 767px) {
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      justify-content: center;
      align-items: center;
    }

    img {
      height: 20rem;
      width: auto;

      @media (max-width: 480px) {
        display: none;
      }

      @media (min-width: 481px) and (max-width: 767px) {
        height: 18rem;
        width: auto;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        height: 18rem;
        width: auto;
      }

      @media (min-width: 992px) and (max-width: 1199px) {
        height: 20rem;
        width: auto;
      }
    }

    gap: 2rem;

    div.content {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      width: 38rem;

      @media (max-width: 480px) {
        width: 26rem;
        margin-top: 1rem;
      }

      @media (min-width: 481px) and (max-width: 767px) {
        width: 32rem;
        margin-top: 1rem;;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        width: 32rem;
      }

      @media (min-width: 992px) and (max-width: 1199px) {
        width: 34rem;
      }

      gap: 1rem;

      h3 {
        color: var(--yellow);
        font-size: 1rem;
        text-align: center;
        font-weight: 400;
      }
     
      article.card-info {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-between;

        background-color: var(--gray);

        padding: 1.5rem;

        width: 100%;

        height: 10rem;
  
        > section {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 1.5rem;

          width: 100%;
          height: 100%;

          > div {
            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            gap: 0.5rem;
          }
        }
          
      }

      footer {
        display: flex;
        flex-direction: row;

        gap: 1rem;

        width: 100%;

        overflow: auto;

        padding: 0.5rem;

        article.card-film {
          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          background-color: var(--gray);

          padding: 1.5rem;

          max-width: 20rem;
          min-width: 10rem;

          gap: 0.5rem;

          h3 {
            color: var(--yellow);
            font-size: 1rem;
            text-align: center;
            font-weight: 400;
          }
        }
      }
    }
  }

`