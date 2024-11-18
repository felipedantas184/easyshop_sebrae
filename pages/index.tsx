import ProductList from "@/components/Product/ProductList";
import fireDB from "@/firebase/initFirebase";
import Layout from "@/layout";
import { Product } from "@/types/productType";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";

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


export default function StorePage({ products }: { products: Product[] }) {
  return (
    <>
      <Head>
        <title>Easy Phone | Loja Virtual</title>
        <meta name="description" content="Seu iPhone novo por um preço que cabe no seu bolso! Compre com a Easy Phone" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Easy Phone | Loja Virtual" />
        <meta property="og:description" content="Seu iPhone novo por um preço que cabe no seu bolso! Compre com a Easy Phone" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Easy Phone | Loja Virtual" />

        <meta property="twitter:title" content="Easy Phone | Loja Virtual" />
        <meta property="twitter:description" content="Seu iPhone novo por um preço que cabe no seu bolso! Compre com a Easy Phone" />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>

      <Layout>
        <ProductList products={products} />
      </Layout>
    </>
  );
}