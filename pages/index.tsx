import ProductList from "@/components/Product/ProductList";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { Product } from "@/types/productType";
import { collection, getDocs } from "firebase/firestore";

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

  return {
    props: {
      products
    }
  }
}


export default function StorePage({ products } : {products : Product[]}) {
  return ( 
    <Layout>
      <ProductList products={products} />
    </Layout>
   );
}