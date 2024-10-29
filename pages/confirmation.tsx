import OrderConfirmation from "@/components/Order/OrderConfirmation";
import OrderInfo from "@/components/Order/OrderInfo";
import OrderList from "@/components/Order/OrderList";
import Layout from "@/layout";
import styled from "styled-components";

export default function ConfirmationPage() {
  return ( 
    <Layout>
      <Section>
        <OrderConfirmation />
        <OrderList />
        <OrderInfo />
      </Section>
    </Layout>
   );
}



export const Section = styled.section`
  background-color: #F6F6F6;
  padding: 25px 0;
`