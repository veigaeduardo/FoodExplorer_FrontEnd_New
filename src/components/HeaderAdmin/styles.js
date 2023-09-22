import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  font-family: 'Roboto',sans-serif;

  display: flex;

  justify-content: center;
  align-items: center;



  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .input {
      width: 50%
    }
  }


  h2 {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_CARD};
    font-weight: 400;
    line-height: 30px;
    
  }


`;

export const NewDishButton = styled.button`
  background: transparent;
  border: none;

  display: flex;
  gap: 5px;

  align-items: center;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.WHITE};

  h1 {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    > h1 {
      display: none;
    }
  }
`;



export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    font-size: 24px;
  }

  > svg {
    font-size: 16px;
    margin-right: 12px;

    @media (max-width: 700px) {
    margin: 0
    }
  }

  @media (max-width: 700px) {
    > h1 {
      display: none;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

`;
