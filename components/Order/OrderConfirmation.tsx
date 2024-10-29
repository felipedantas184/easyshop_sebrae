import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import styled from "styled-components";

const OrderConfirmation = () => {
  const order = useSelector((state: any) => state.order);
  
  var personalMessageComposure = "```" + order?.lastOrder?.personal.name + '%0A' + order?.lastOrder?.personal.email + '%0A' + order?.lastOrder?.personal.phone + "```"
  var deliveryMessageComposure = (order?.lastOrder?.deliveryType === "pickup") ? '```Reirada na loja```' : "```" + order?.lastOrder?.delivery.address + ', ' + order?.lastOrder?.delivery.number + ' - ' + order?.lastOrder?.delivery.complement + '%0A' + order?.lastOrder?.delivery.zipCode + '%0A' + order?.lastOrder?.delivery.city + ', ' + order?.lastOrder?.delivery.state + "```"
  var paymentMessageComposure = "```" + order?.lastOrder?.paymentMethod + "```"
  var cartMessageComposure = order?.lastOrder?.cart.reduce(function (prevVal: any, currVal: any, idx: any) {
    return idx == 0 ? Number(idx + 1) + '. ' + "```" + currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}` : prevVal + '%0A%0A' + Number(idx + 1) + '. ' + "```" + currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}`;
  }, '')

  const message = `📄 *RESUMO DA COMPRA*%0A_${order?.lastOrder.id}_%0A%0A----------------------------------------------%0A👤 *Informações do Cliente:*%0A${personalMessageComposure}%0A%0A----------------------------------------------%0A🚛 *Informações da Entrega:*%0A${deliveryMessageComposure}%0A%0A----------------------------------------------%0A📃 *Informações do Pedido:*%0A${cartMessageComposure}%0A%0A----------------------------------------------%0A💳 *Forma do Pagamento:*%0A${paymentMessageComposure}%0A%0A----------------------------------------------%0A%0A💵 *Total a Pagar:*%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(order?.lastOrder?.cart.reduce((acc: any, curr: any) => acc + curr.price*curr.quantity, 0))}`

  return (
    <Wrapper>
      <BackWrapper href={'/'} >
        <FaArrowLeft size={16} color="#13131A" />
        <Subtitle>Página inicial</Subtitle>
      </BackWrapper>
      <TextWrapper>
        <FaCheckCircle size={48} color="#08A045" />
        <Title>Estamos Quase Lá!</Title>
        <Subtitle>Agora você precisa enviar a confirmação do pedido via WhatsApp para o vendedor!</Subtitle>
        <CheckoutButton href={`https://wa.me//5586995185757?text=${message}`}>Enviar Pedido</CheckoutButton>
      </TextWrapper>
    </Wrapper>
  );
}

export default OrderConfirmation;




export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`
export const BackWrapper = styled(Link)`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`
export const TextWrapper = styled.div`
  width: 100%;
  padding: 16px 12px;
  margin-bottom: 8px;
  background-color: #FFF;
  border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`
export const Subtitle = styled.h3`
  color: #5A5A5A;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`
export const CheckoutButton = styled.a`
  width: 100%;
  min-height: 3rem;
  margin: 0;
  margin-top: 8px;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);

  background-color: #5A189A;
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  color: #fff;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #5A189A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`