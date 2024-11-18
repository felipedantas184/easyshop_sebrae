import GeneralInfo from "@/components/Dashboard/GeneralInfo";
import OrdersTable from "@/components/Dashboard/OrdersTable";
import ProductsList from "@/components/Dashboard/ProductsList";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { Order, Product, Variant } from "@/types/productType";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import styled from "styled-components";

export async function getServerSideProps() {
  const DBProducts = await getDocs(collection(fireDB, "products"));
  const products: any = []
  DBProducts.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    products.push(obj)
  });

  const DBOrders = await getDocs(collection(fireDB, "orders"));
  const orders: any = []
  DBOrders.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }

    orders.push(obj)
  });
  return {
    props: {
      products,
      orders
    }
  }
}


export default function DashboardPage({ products, orders }: { products: Product[], orders: Order[] }) {
  const getProductName = (productId: string) => {
    const product = products.filter((product: any) => product.id == productId)
    const productName = (product[0].title)

    return productName
  }
  const getVariantName = (productId: string, variantId: string) => {
    const product = products.filter((product: any) => product.id == productId)
    const productVariants = (product[0].variants)

    const variant = productVariants.filter((variant: Variant) => variant.id == variantId)
    if (variant.length > 0) {
      const variantName = variant[0].name
      return variantName
    } else {
      return "??"
    }
  }

  return (
    <>
      <Head>
        <title>Dashboard Easy Phone</title>
        <meta name="description" content="Dashboard Easy Phone" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Dashboard Easy Phone" />
        <meta property="og:description" content="Dashboard Easy Phone" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Dashboard Easy Phone" />

        <meta property="twitter:title" content="Dashboard Easy Phone" />
        <meta property="twitter:description" content="Dashboard Easy Phone" />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>

      <Layout>
        <Section>
          <GeneralInfo orders={orders} />
          <ProductsList products={products} />
          <OrdersTable orders={orders} getProductName={getProductName} getVariantName={getVariantName} />
        </Section>
      </Layout>
    </>
  );
}



const Section = styled.section`
  background-color: #F6F6F6;
  padding: 25px 8px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`