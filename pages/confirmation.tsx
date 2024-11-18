import OrderConfirmation from "@/components/Order/OrderConfirmation";
import OrderInfo from "@/components/Order/OrderInfo";
import OrderList from "@/components/Order/OrderList";
import Layout from "@/layout";
import Head from "next/head";
import styled from "styled-components";

export default function ConfirmationPage() {
  return (
    <>
      <Head>
        <title>Seu Pedido Foi Registrado! | Easy Phone</title>
        <meta name="description" content="Falta pouco para receber seu pedido! Efetue o pagamento para confirmar o pedido." />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Seu Pedido Foi Registrado! | Easy Phone" />
        <meta property="og:description" content="Falta pouco para receber seu pedido! Efetue o pagamento para confirmar o pedido." />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Seu Pedido Foi Registrado! | Easy Phone" />

        <meta property="twitter:title" content="Seu Pedido Foi Registrado! | Easy Phone" />
        <meta property="twitter:description" content="Falta pouco para receber seu pedido! Efetue o pagamento para confirmar o pedido." />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>

      <Layout>
        <Section>
          <OrderConfirmation />
          <OrderList />
          <OrderInfo />
        </Section>
      </Layout>
    </>
  );
}



export const Section = styled.section`
  background-color: #F6F6F6;
  padding: 25px 0;
`