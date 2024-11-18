import ProductDetail from "@/components/Product/ProductDetail";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { Product } from "@/types/productType";
import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";

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
    <>
      <Head>
        <title>{product.title} - {product.brand} | Easy Phone - Loja Virtual</title>
        <meta name="description" content={`Compre seu ${product.title} - ${product.brand} com as melhores condições na Easy Shop `} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content={`${product.title} - ${product.brand} | Easy Phone - Loja Virtual`} />
        <meta property="og:description" content={`Compre seu ${product.title} - ${product.brand} com as melhores condições na Easy Shop `} />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content={`${product.title} - ${product.brand} | Easy Phone - Loja Virtual`} />

        <meta property="twitter:title" content={`${product.title} - ${product.brand} | Easy Phone - Loja Virtual`} />
        <meta property="twitter:description" content={`Compre seu ${product.title} - ${product.brand} com as melhores condições na Easy Shop`} />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>

      <Layout>
        <ProductDetail product={product} />
      </Layout>
    </>
  )
}