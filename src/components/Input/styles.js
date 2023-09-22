import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex: 1;
  align-items: center;

  background: none;

  border: 1px solid #fff;
  border-radius: 5px;
 
  > input {
      width: 100%;
      height: 16px;
      background: transparent;
      border: none;

      gap: 10px;
      padding: 14px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      border: 0;

        @media (max-width: 400px) {
        padding: 2px
      }
    }

    > svg {
      margin-left: 16px;
      min-width: 15px;

      @media (max-width: 400px) {
        margin-left: 4px;
      }
    }



`;