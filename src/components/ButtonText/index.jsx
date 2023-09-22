import { Container } from "./styles";

export function ButtonText({ title, icon, ...rest}){
  return (
    <Container
    type="button"
    {...rest}
    >
      { icon ? icon : null}
      <p>{title}</p>
    </Container>
  );
}