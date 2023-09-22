import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #192227;
  border-radius: 8px;

  .pay {
    display: flex;
    > button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      
      margin: 0;
      width: 100%;
      padding: 10px 30px;

      border-bottom: 1px solid #192227;

      justify-content: center;

      overflow: hidden;
      :hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    button:first-child {
      border-right: 1px solid #192227;
      border-top-left-radius: 8px;
    }

    button:last-child {
      border-top-right-radius: 8px;
    }

    .active {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 50vh;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  .status-order {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.8rem;
      text-align: center;

      color: ${({ theme }) => theme.COLORS.GRAY};
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      p {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.GRAY};
      }
    }
  }
`;