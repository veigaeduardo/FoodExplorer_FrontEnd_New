import { Container } from "./styles";

import { Button } from "../Button";

import { Receipt } from "../../assets/icons/receipt";

export function ButtonCredit({paymentMethod}) {
  return(
    <Container>

      <div className="creditCardNumber">
        <label htmlFor="creditCardNumber">Número do Cartão</label>
        <input type="text" name="creditCardNumber" id="creditCardNumber"  placeholder="0000 0000 0000 0000"/>
      </div>


      <div className="other-informations">
        <div>
          <label htmlFor="valid">Validade</label>
          <input type="text" name="valid" id="valid" placeholder="04/25" />
        </div>
        <div>
          <label htmlFor="cvc">CVC</label>
          <input type="text" name="cvc" id="cvc"  placeholder="04/25"/>
        </div>
      </div>

      <Button
        icon={<Receipt />}
        title="Finalizar pagamento"
        onClick={paymentMethod}
      />

    </Container>
  )
}