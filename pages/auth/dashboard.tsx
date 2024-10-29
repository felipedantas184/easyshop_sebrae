import GeneralInfo from "@/components/Dashboard/GeneralInfo";
import OrdersList from "@/components/Dashboard/OrdersList";
import ProductsList from "@/components/Dashboard/ProductsList";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { Order, Product } from "@/types/productType";
import { collection, getDocs } from "firebase/firestore";
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


export default function DashboardPage({ products, orders } : {products : Product[], orders : Order[]}) {
  const getProductName = (productId: string) => {
    const product = products.filter((product: any) => product.id == productId)
    const productName = (product[0].title)
  
    return productName
  }
  
  return ( 
    <Layout>
      <Section>
        <GeneralInfo orders={orders} />
        <Wrapper>
          <OrdersList orders={orders} getProductName={getProductName} />
          <ProductsList products={products} />
        </Wrapper>
      </Section>
    </Layout>
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  max-width: 1080px;
`