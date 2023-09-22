import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;

  h1 {
    font-family: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 500;
    margin: 20px 0 20px 25px;
  }
  .rec-arrow {
    font-size: 1.5rem;
    color: #fff;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .rec-arrow:hover {
    color: ${({ theme }) => theme.COLORS.BLUE} ;
  }
`