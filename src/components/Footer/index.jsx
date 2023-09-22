import { Container } from "./styles";

/**
 * Componente Footer para exibir o rodapé da página.
 *
 * Este componente renderiza o logotipo em tons de cinza e o texto de direitos autorais no rodapé da página.
 *
 * @returns {JSX.Element} Um componente de rodapé.
 */
export function Footer(){
  return (
    <Container>
      <div>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
        </svg>
        <h1>Food Explorer</h1>
      </div>
      <span>© 2022 - Todos os direitos reservados.</span>
 
    </Container>
  )
}
