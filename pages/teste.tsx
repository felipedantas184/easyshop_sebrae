import Head from "next/head";

export default function TestePage() {
  const handleCheckout = async () => {
    const response = await fetch("/api/mercadoPago", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([]),
    });
    const data = await response.json();
    if (data.init_point) {
      window.location.href = data.init_point;
    }
  };

  
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

      <button onClick={handleCheckout}>
        Pagar com Mercado Pago
      </button>
    </>
  );
}