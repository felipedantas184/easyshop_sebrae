import ProductForm from "@/components/Register/ProductForm";
import Layout from "@/layout";
import Head from "next/head";
import styled from "styled-components";

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Cadastro de Produto</title>
        <meta name="description" content="Cadastre o seu novo produto!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Cadastro de Produto" />
        <meta property="og:description" content="Cadastre o seu novo produto!" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Cadastro de Produto" />

        <meta property="twitter:title" content="Cadastro de Produto" />
        <meta property="twitter:description" content="Cadastre o seu novo produto!" />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>

      <Layout>
        <Section>
          <Wrapper>
            <Title>Cadastrar novo produto</Title>
            <ProductForm />
          </Wrapper>
        </Section>
      </Layout>
    </>
  );
}


export const Section = styled.section`
  background-color: #F6F6F6;
  padding: 25px 0;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 20px;
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 8px;
`