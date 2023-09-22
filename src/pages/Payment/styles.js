import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 80px;

  grid-template-areas:
    'header'
    'content'
    'footer';

    @media (max-width: 400px) {
    grid-template-rows: auto auto 70px;
  }


`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 10px;
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;


  display: flex;
  justify-content: space-between;
  gap: 16px;

  h1, h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1 {
    font-size: 2rem
  }

  h2 {
    font-size: 1.25rem;
  }

  span {

  }

  .orders {

    display: flex;
    flex-direction: column;
    gap: 10px;


    .scroll {
      overflow-y: auto;
      width: 100%;

      height: 50vh;
    }

    .foods {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 100px;
      }

      .infos {
        display: flex;
        align-items: center;
        gap: 5px;
        .quantity,
        .name {
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-weight: 500;
          font-size: 20px;
          font-family: 'Poppins', sans-serif;
        }

        .value {
          display: inline-block;
          font-family: 'Roboto', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;

          color: ${({ theme }) => theme.COLORS.GRAY};

        }
      }

      button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        margin-top: 5px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

  }

  .payment {

    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-bottom: 16px;
  }

  @media(max-width: 426px) {
    flex-direction: column;
    ;
  }

 

`;