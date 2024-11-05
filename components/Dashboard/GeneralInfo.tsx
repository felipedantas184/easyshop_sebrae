import { Order } from "@/types/productType";
import styled from "styled-components";

const GeneralInfo = ({orders} : {orders : Order[]}) => {
  return (
    <Wrapper>
      <Title>Visão Geral</Title>
      <Menu>
        <Card>
          <CardTitle>Total de Pedidos</CardTitle>
          <CardNumber>{orders.length}</CardNumber>
        </Card>
        <Card>
          <CardTitle>Receita Total</CardTitle>
          <CardNumber>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(orders.reduce((acc: any, curr: any) => acc + curr.amount, 0))}</CardNumber>
        </Card>
        <Card>
          <CardTitle>Ticket Médio</CardTitle>
          <CardNumber>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(orders.reduce((acc: any, curr: any) => (acc + curr.amount), 0) / orders.length)}</CardNumber>
        </Card>
        <Card>
          <CardTitle>Total no Mês</CardTitle>
          <CardNumber>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(orders.filter((order: Order) => (order.timeStamp.slice(4, 6) === `${new Date().getMonth() + 1}`)).reduce((acc: any, curr: any) => (acc + curr.amount), 0))}</CardNumber>
        </Card>
      </Menu>
    </Wrapper>
  );
}

export default GeneralInfo;


const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 8px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`
const Title = styled.h1`
  color: #13131A;
  font-size: 20px;
  font-weight: 700;
`
const Menu = styled.div`
  width: 100%;
	display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`
const Card = styled.div`
  width: 100%;
  padding: 16px 12px;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 8px;
`
const CardTitle = styled.h5`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
  align-self: flex-start;
`
const CardNumber = styled.span`
  color: #13131A;
  font-size: 14px;
  font-weight: 500;
  align-self: flex-start;
`