import { InputWrapper, Label, Option, Select } from "./styles";

const Payment = ({paymentMethod, setPaymentMethod}: any) => {
  return (
    <InputWrapper>
      <Label>Forma de Pagamento</Label>
      <Select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod} required>
        <Option value={''} hidden >Escolha um método</Option>
        <Option value={'Pix - A combinar'} >Pagar com Pix</Option>
        <Option value={'Cartão de Crédito - A combinar'}>Cartão de Crédito</Option>
        <Option value={'Cartão de Débito - A combinar'}>Cartão de Débito</Option>
      </Select>
    </InputWrapper>
  );
}

export default Payment;