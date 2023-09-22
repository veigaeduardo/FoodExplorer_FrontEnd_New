import { Container } from "./styles";
import QrCode from "../../assets/images/qrcode.png";

export function ButtonQrCode(){
  return(
    <Container>
    <img src={QrCode} alt="" />
    </Container>
  )
}