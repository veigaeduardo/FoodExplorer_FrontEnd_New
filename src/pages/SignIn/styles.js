import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
  

  .logo {
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  h1 {
    font-size: 2rem;
  }

  svg {
    margin-right: 0.75rem;
  }

  @media (max-width: 540px) {
    margin: 8px 0;
  }

  }

  .form {
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  gap: 1.6rem;

  max-width: 47rem;
  padding: 6.4rem;

  border-radius: 16px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_FORM};
    
  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;
  }
  

  a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;
  }

  span {
    margin-bottom: 8px;
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  > div span {
    font-family: 'Roboto', sans-serif;
    display: flex;
  }

  @media (max-width: 540px) {
    padding: 3rem;

    h1 {
      font-size: 24px;
    }
  }
}
  `;
