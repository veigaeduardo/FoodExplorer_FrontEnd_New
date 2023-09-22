import styled from 'styled-components'

export const Container = styled.button`
  background: transparent;
  border: none;

  display: flex;
  gap: 5px;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
