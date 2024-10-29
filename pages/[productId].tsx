import ProductDetail from "@/components/Product/ProductDetail";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { Product } from "@/types/productType";
import { doc, getDoc } from "firebase/firestore";

export const getServerSideProps = async (context: any) => {
  const id = context.params.productId;
  const data = await getDoc(doc(fireDB, "products", id));
  const product = data.data()
  if (product !== undefined) {
    product.id = id
  }

  return {
    props: {
      product: product,
    }
  }
}

export default function DetailPage({ product }: { product: Product }) {
  return (
    <Layout>
      <ProductDetail product={product} />
    </Layout>
  )
}