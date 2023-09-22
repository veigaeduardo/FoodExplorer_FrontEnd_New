import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  color: ${({ theme }) => theme.COLORS.GRAY};

  .creditCardNumber {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }
  input {
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  button {
    justify-content: center;
  }

  label {
    font-family: 'Roboto', sans-serif;
  }

  .other-informations {
  display: flex;
  gap: 20px;
  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
}

`