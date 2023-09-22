import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px ;

  background: ${({ theme}) => theme.COLORS.BACKGROUND_HEADER };

  > div {
    display: flex;
    font-family:'Roboto', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
  }

  svg {
    margin-right: 12px;
  }

  > svg ,path{
    fill: rgba(255, 255, 255, 0.3);
  }

  span {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  @media (max-width: 700px) {
    padding: 0 8px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    padding: 10px;
  }

`;