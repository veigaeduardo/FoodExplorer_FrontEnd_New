import styled from "styled-components";
import Background from "../../assets/images/background-404.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  font-family: 'Poppins', sans-serif;

  background: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    max-width: 80%;
  }

  display: flex;
  align-items: center;
  text-align: center;


  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  h1 {
    font-size: 3rem;
  }


  h2 {
    font-weight: 400;
    font-size: 2rem;
  }

  p {
    margin: 10px 0
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 30px;
    border: none;
    width: 100px;
    height: 35px;
  }

  @media(max-width: 426px) {
    flex-direction: column;
    
    img {
      max-width: 100%;
    padding-left: 70px;
    }
  }


`;
