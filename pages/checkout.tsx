import CheckoutList from "@/components/Checkout/CheckoutList";
import EmptyCart from "@/components/Checkout/EmptyCart";
import CheckoutForm from "@/components/Form/CheckoutForm";
import Layout from "@/layout";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const cart = useSelector((state: any) => state.cart);

  return ( 
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
   );
}