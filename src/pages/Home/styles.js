import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;

  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 80px;
  grid-template-areas:
    'header'
    'content'
    'footer';

    header {
      position: fixed;
      width: 100%;
      height: 68px;
      z-index: 1;
    }
`;



export const Content = styled.div`
  grid-area: content;

  padding: 130px 10px 0;
  margin: 0 auto 30px;

  width: 100%;
  max-width: 1280px;



.banner {
  position: relative;
  width: 100%;
  height: 260px;

  padding: 50px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 0 auto;
  
  border-radius: 8px;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);


  img {
    width: 600px;
    position: absolute;
    left: -50px;
    bottom: 0;
    }

  h1 {
    font-weight: 500;
  }
}

@media (max-width: 1000px) {
    padding: 50px 30px 0;

    .banner {
      height: 200px;
      img {
        width: 400px;
        left: -40px;
      }

      .text-banner {
        width: 50%;
        h2 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (max-width: 426px) {
    padding: 30px 15px 0;

    .banner {
      height: 130px;
      img {
        width: 250px;
        left: 50px;
      }
      .text-banner {
        position: absolute;
        top: 10px;
        left: 5px;
        right: 0;
        width: 100%;
        h2 {
          font-size: 3.5rem;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .banner {
      .text-banner {
        top: -10px;
      }
    }
  }


`;