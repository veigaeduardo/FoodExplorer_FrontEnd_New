import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 512px;

  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;

  gap: 16px;
  margin: 0.5rem 1rem ;
  
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  
  border-radius: 8px;

  svg {
    align-self: flex-end;
  }

  .icon {
    align-self: flex-end;
    margin-right: 15px;
  }

  .name {
    justify-content: center;
    font-size: 24px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY}
  }

  span, h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h2 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.BLUE}
  }

  div {
    img {
      width: 176px;
      height: 176px;

      margin-bottom: 16px;
    }
  }

  .informations {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


`;