import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-height: 50px;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins', sans-serif ;
  font-weight: 500;
  
  border: 0;
  padding: 12px;
  border-radius: 5px;
  line-height: 24px;
  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  background-color: ${({ theme }) => theme.COLORS.RED};
  
  &:disabled{
    opacity: 0.5;
  }
   svg {
    margin-right: 8px;
   }


`;