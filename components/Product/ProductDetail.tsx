import { Product } from "@/types/productType";
import Image from "next/image";
import styled from "styled-components";
import DetailButton from "../Buttons/DetailButton";

const ProductDetail = ({product} : {product : Product}) => {
  return ( 
    <Section>
        <Wrapper>
          <ImageWrapper>
            <Image src={product.imageUrl[0]} alt={product.title} fill className={'image'} />
          </ImageWrapper>
          <BigWrapper>
            <TextWrapper style={{ marginTop: 24 }} >
            <SpaceBetween>
              <Brand>{product.brand}</Brand>
              <Stock>{product.stock} restantes</Stock>
            </SpaceBetween>              
              <Title>{product.title}</Title>
              <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product.price)}</Price>
            </TextWrapper>
            <DetailButton product={product} />
          </BigWrapper>
        </Wrapper>
      </Section>
   );
}
 
export default ProductDetail;

export const Section = styled.section`
  background-color: #F6F6F6;
  padding: 0 0 25px 0;
  min-height: 86vh;

  @media screen and (min-width: 768px) {
    padding: 25px 0;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 20px 20px;
  overflow: hidden;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 768px) {
    border-radius: 20px;
  }
`
export const BigWrapper = styled.div`
  width: 100%;
  padding: 0 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const TextWrapper = styled.div`
  width: 100%;
  padding: 0 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const SpaceBetween = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Brand = styled.h3`
  color: #13131A;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`
export const Stock = styled.span`
  color: #EE4B2B;
  font-size: 14px;
  font-weight: 400;
`
export const Title = styled.h2`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
`
export const Price = styled.h4`
  color: #13131A;
  font-size: 18px;
  font-weight: 500;
`