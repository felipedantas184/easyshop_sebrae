import { FaTimes } from "react-icons/fa";
import { CheckoutButton, Close, Container, Divider, EmptyWrapper, ImageWrapper, Price, ProductsWrapper, Span, TextWrapper, Title, TitleWrapper, Topic, TopicWrapper, Wrapper } from "./styles";
import { useSelector } from "react-redux";
import Image from "next/image";
import { CartItem } from "@/types/productType";
import CheckoutCard from "@/components/Checkout/CheckoutCard";

const Cart = ({ cartOpen, toggleCart }: any) => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <Container $cartOpen={cartOpen}>
      <Wrapper>
        <TitleWrapper>
          <Title>Carrinho</Title>
          <Close onClick={toggleCart}>
            <FaTimes color="#13131A" />
          </Close>

        </TitleWrapper>

        {(cart.length === 0) ? (
          <EmptyWrapper>
            <ImageWrapper>
              <Image src={'/assets/icons/emptyCart.svg'} alt={'product.titl'} fill className={'image'} />
            </ImageWrapper>
            <Span>Seu carrinho está vazio</Span>
          </EmptyWrapper>
        ) : (
          <ProductsWrapper>
            {cart.map((product: CartItem) => (
              <CheckoutCard key={product.id} product={product} />
            ))}
          </ProductsWrapper>
        )}
        <TextWrapper>
          <TopicWrapper>
            <Topic>Total</Topic>
            <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0))}</Price>
          </TopicWrapper>
          {(cart.length === 0) ? (
            <CheckoutButton href={'/'} onClick={toggleCart} >Adicionar Itens</CheckoutButton>
          ) : (
            <CheckoutButton href={'/checkout'}>Finalizar Pedido</CheckoutButton>
          )}
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}

export default Cart;