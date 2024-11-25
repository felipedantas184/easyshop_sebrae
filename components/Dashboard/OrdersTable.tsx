import { Order } from "@/types/productType";
import styled from "styled-components";

const OrdersTable = ({ orders, getProductName, getVariantName }: { orders: Order[], getProductName: (productId: string) => string, getVariantName: (productId: string, variantId: string) => string }) => {
  function byDate(a: Order, b: Order) {
    if (a.timeStamp > b.timeStamp) { return -1; }
    if (a.timeStamp < b.timeStamp) { return 1; }
    return 0;
  }

  return (
    <Wrapper>
      <TableHeader>
        <Table cellPadding={4} cellSpacing={8} border={0}>
          <thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Entrega</Th>
              <Th>Produtos</Th>
              <Th>Pagamento</Th>
              <Th>Total</Th>
              <Th>Data</Th>
              <Th>Status</Th>
            </Tr>
          </thead>
        </Table>
      </TableHeader>
      <TableContent>
        <Table cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            {(orders.sort(byDate).map((order: Order) => (
              <Tr key={order.id}>
                <Td>{order.personal.name}</Td>
                <Td>{(order.deliveryType === 'pickup' ? "Retirada" : `${order.delivery?.address}, ${order.delivery?.number}`)}</Td>
                <Td>{order.cart.reduce((acc: any, curr: any) => `${acc} ${getProductName(curr.productId)} ${getVariantName(curr.productId, curr.variantId)} (x${curr.quantity})`, '')}</Td>
                <Td>{order.paymentMethod}</Td>
                <Td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(order.amount)}</Td>
                <Td>{order.timeStamp.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$3/$2/$1 $4:$5:$6')}</Td>
                <Td>{order.status}</Td>
              </Tr>
            )))}
          </tbody>
        </Table>
      </TableContent>
    </Wrapper>
  );
}

export default OrdersTable;


const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;

	display: flex;
	flex-direction: column;
	align-items: center;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  overflow: hidden;
`
const TableHeader = styled.div`
  background-color: #2694A7;
  overflow-x: auto;
`
const TableContent = styled.div`
  height: 500px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid #2694A7;
  border-radius: 0 0 10px 10px;
`
const Table = styled.table`
  width:100%;
  table-layout: fixed;
`
const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
`
const Th = styled.th`
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #FFF;
  text-transform: uppercase;

  flex: 1;
`
const Td = styled.td`
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 400;
  font-size: 12px;
  color: #13131A;
  border-bottom: solid 1px rgba(255,255,255,0.1);

  flex: 1;
`