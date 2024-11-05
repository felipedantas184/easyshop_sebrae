import fireDB from "@/firebase/initFirebase";
import { NewProduct, Product } from "@/types/productType";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";

const ProductUpdate = ({ product, setSelectedProduct } : { product : Product, setSelectedProduct : any}) => {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    title: product.title,
    brand: product.brand,
    category: product.category,
    description: product.description,
    price: product.price,
    stock: product.stock,
  })

  async function updateData(product: Product) {
    try {
      await updateDoc(doc(fireDB, "products", product.id), {
        title: newProduct.title,
        brand: newProduct.brand,
        description: newProduct.description,
        price: newProduct.price,
        stock: newProduct.stock,
      })
      alert('atualizado')
      setSelectedProduct('')
    } catch (error) {
      alert(error)
    }
  }
  
  return ( 
    <UpdateWrapper>
      <InputDoubleWrapper>
        <InputWrapper>
          <Label>Nome</Label>
          <Input type="text" value={newProduct.title} onChange={(e: any) => setNewProduct({ ...newProduct, title: e.target.value })} />
        </InputWrapper>
        <InputWrapper>
          <Label>Marca</Label>
          <Input type="text" value={newProduct.brand} onChange={(e: any) => setNewProduct({ ...newProduct, brand: e.target.value })} />
        </InputWrapper>
      </InputDoubleWrapper>
      <InputDoubleWrapper>
        <InputWrapper>
          <Label>Estoque</Label>
          <Input type="number" value={newProduct.stock} onChange={(e: any) => setNewProduct({ ...newProduct, stock: e.target.value })} />
        </InputWrapper>
        <InputWrapper>
          <Label>Preço</Label>
          <Input type="number" value={newProduct.price} onChange={(e: any) => setNewProduct({ ...newProduct, price: e.target.value })} />
        </InputWrapper>
      </InputDoubleWrapper>
      <InputWrapper>
        <Label>Descrição</Label>
        <TextArea value={newProduct.description} onChange={(e: any) => setNewProduct({ ...newProduct, description: e.target.value })} />
      </InputWrapper>
      <UpdateButton onClick={() => updateData(product)}>Atualizar Produto</UpdateButton>
    </UpdateWrapper>
   );
}
 
export default ProductUpdate;



const UpdateWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 4px;
`
const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
const Label = styled.label`
  color: #13131A;
  font-size: 14px;
  font-weight: 500;
`
const Input = styled.input`
  width: 100%;
  padding: 6px 4px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  border: 1px solid #C4C4C4;
  

  ::placeholder {
    color: #C4C4C4;
    font-size: 14px;
    font-weight: 600;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  padding: 6px 4px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  border: 1px solid #C4C4C4;
  

  ::placeholder {
    color: #C4C4C4;
    font-size: 14px;
    font-weight: 600;
  }
`
const InputDoubleWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
const UpdateButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 8px;

  background-color: #01cc65;
  background-clip: padding-box;

  border: none;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  color: #fff;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #2694A7;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`