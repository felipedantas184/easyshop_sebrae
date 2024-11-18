import CheckoutList from "@/components/Checkout/CheckoutList";
import EmptyCart from "@/components/Checkout/EmptyCart";
import CheckoutForm from "@/components/Form/CheckoutForm";
import Layout from "@/layout";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state.cart);

  return (
    <>
      <Head>
        <title>Checkout Easy Phone | Loja Virtual</title>
        <meta name="description" content="Confirme seus dados para enviar seu pedido!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Checkout Easy Phone | Loja Virtual" />
        <meta property="og:description" content="Confirme seus dados para enviar seu pedido!" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Checkout Easy Phone | Loja Virtual" />

        <meta property="twitter:title" content="Checkout Easy Phone | Loja Virtual" />
        <meta property="twitter:description" content="Confirme seus dados para enviar seu pedido!" />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>

      <Layout>
        {(cart.length === 0) ? (
          <EmptyCart />
        ) : (
          <>
            <CheckoutList />
            <CheckoutForm />
          </>
        )}
      </Layout>
    </>
  );
}