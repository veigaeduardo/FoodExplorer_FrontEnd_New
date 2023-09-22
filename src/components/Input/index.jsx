import { Container } from "./styles";

export function Input({ icon, span, children, ...rest}){
  return (
    <Container>
      { icon ? icon : null }
      { span ? span : null }
      <span />
      <input {...rest} />
    </Container>
  )
}