import styled from "styled-components";

export const Container = styled.div`
  height: 36px;

  padding: 0.5rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  background-color: ${({ isNew }) => isNew ? "transparent" : `#1a2227`};
  color: ${({ theme , isNew}) => isNew ? theme.COLORS.GRAY : theme.COLORS.WHITE};

  border: ${({ theme , isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

  margin-bottom: 0.5rem;

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 0.9rem;
    max-width: 110px;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY : theme.COLORS.WHITE};
    }
  }

  > button {
    background: none;
    border: none;
    > svg {
      width: 100%;
      height: 100%;
      color: ${({ theme, isNew }) =>
        !isNew ? `${theme.COLORS.WHITE}` : `${theme.COLORS.GRAY}`};
      &:hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;