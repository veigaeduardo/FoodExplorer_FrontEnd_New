import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 9.375rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  background-color: #020a0f;
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  border: 1px solid #fff;
`;