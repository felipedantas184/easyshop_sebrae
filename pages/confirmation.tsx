import OrderConfirmation from "@/components/Order/OrderConfirmation";
import OrderInfo from "@/components/Order/OrderInfo";
import OrderList from "@/components/Order/OrderList";
import Layout from "@/layout";
import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
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
          <BackWrapper href={'/'} >
            <FaArrowLeft size={16} color="#13131A" />
            <Span>Página inicial</Span>
          </BackWrapper>
          <Wrapper>
            <ColumnWrapper>
              <OrderConfirmation />
              <OrderInfo />            
            </ColumnWrapper>
            <OrderList />
          </Wrapper>
        </Section>
      </Layout>
    </>
  );
}



const Section = styled.section`
  background-color: #F6F6F6;
  padding: 25px 0;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`
export const BackWrapper = styled(Link)`
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`
export const Span = styled.span`
  color: #5A5A5A;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  max-width: 1080px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`