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

    img {
      height: 20rem;
      width: auto;
    }

    gap: 2rem;

    div.content {
      display: flex;
      flex-direction: column;

      gap: 1rem;

        ul {
          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 1rem;

          h3 {
            color: var(--yellow);
            font-size: 1rem;
            text-align: center;
            font-weight: 400;
          }
        }
     
      article.card-info {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: space-between;

        background-color: var(--gray);

        width: 36rem;
        height: 10rem;

        padding: 1.5rem;
         
        > section {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 1.5rem;

          width: fit-content;
          height: fit-content;

            span {
              font-size: 1rem;
              font-weight: 400;
            }
          }
          
      }

      footer {
        display: flex;
        flex-direction: row;

        gap: 1rem;

        width: 36rem;

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
        }
      }
    }
  }

`