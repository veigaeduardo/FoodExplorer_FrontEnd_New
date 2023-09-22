import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 80px;

  grid-template-areas:
    'header'
    'content'
    'footer';

  @media (max-width: 1024px) {
    grid-template-rows: 100px auto 80px;
  }
  @media (max-width: 400px) {
    grid-template-rows: 100px auto 80px;
  }
`

export const Content = styled.div`
  grid-area: content;

  padding: 0 10px;
  margin: 0 auto;

  width: 100%;
  max-width: 1280px;


  h2 {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 2rem;
    margin: 10px;
  }
  table,
  tr,
  td,
  th {
    border: 1px solid #192227;
  }

  table {
    border-spacing: 0;
    border-collapse: separate;
    border: 1px solid #192227;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;

    overflow-x: auto;
    margin-bottom: 10px;
  }

  th {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 20px 30px;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
  }

  th:first-child {
    border-top-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
  }

  td {
    font-family: 'Roboto', sans-serif;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.GRAY};

    font-size: 1rem;
    padding: 20px 30px;
  }

  select {
    background: none;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 10px 20px;
    width: 100%;

    option {
      border: none;
      font-size: 1rem;
    }
  }

  option {
    font-size: 1.6rem;
    background-color: #192227;

    &:hover {
      background: white;
      color: black;
    }
  }

  span {
    font-size: 1rem;
  }

  @media (max-width: 570px) {
    th {
      font-size: 1rem
    }
  }

  @media (max-width: 1000px) {
    th,
    td,
    select {
      padding: 10px;
    }
  }
`
