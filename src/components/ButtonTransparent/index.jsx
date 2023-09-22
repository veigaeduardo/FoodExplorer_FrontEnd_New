import { Container } from "./styles"

export function ButtonTransparent({title='', onClick,Icon = false, iconSize = false,iconColor='',  ...rest}) {
  return (
    <Container  onClick={onClick} {...rest}>
      {Icon && <Icon size={iconSize} color={iconColor}/>}
      {title}
    </Container>
  )
}