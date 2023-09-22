import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  font-size: 16px;
  font-weight:400;

  padding: 0 2rem;

  &:hover{
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    > p {
      display: none;
    }
  }
  @media (min-width: 700px) {
    > svg {
      display: none;
    }
  }

  @media (max-width: 426px) {
    padding: 0 0.5rem;
  }
`;