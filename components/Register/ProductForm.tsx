import { NewProduct } from "@/types/productType";
import { addProduct } from "@/utils/functions";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const ProductForm = () => {
  const router = useRouter()
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [newProduct, setNewProduct] = useState<NewProduct>({
    title: '',
    brand: '',
    description: '',
    price: 0,
    stock: 0,
  })

  const handleNewProduct = async (e: any) => {
    e.preventDefault()
    addProduct(imageUpload, newProduct, router)
  } 
  
  return (
    <Form onSubmit={handleNewProduct}>
      <InputWrapper>
        <Label>Produto</Label>
        <Input type='text' placeholder="Nome do produto" required
          value={newProduct.title} onChange={(e: any) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Marca</Label>
        <Input type='text' placeholder="Marca do produto" required
          value={newProduct.brand} onChange={(e: any) => setNewProduct({ ...newProduct, brand: e.target.value })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Descrição</Label>
        <TextArea placeholder="Descreva o produto" required
          value={newProduct.description} onChange={(e: any) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
      </InputWrapper>
      <InputDoubleWrapper>
        <InputWrapper>
          <Label>Preço</Label>
          <Input type='number' placeholder="Preço" required
            value={newProduct.price} onChange={(e: any) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Estoque</Label>
          <Input type='number' placeholder="Estoque" required
            value={newProduct.stock} onChange={(e: any) => setNewProduct({ ...newProduct, stock: e.target.value })}
          />
        </InputWrapper>
      </InputDoubleWrapper>
      <InputWrapper>
        <Label>Foto</Label>
        <Input type='file' accept="image/*" required onChange={(e) => (setImageUpload(e.target.files))} multiple />
      </InputWrapper>
      <RegistertButton type="submit" >Adicionar Produto</RegistertButton>
    </Form>
  );
}

export default ProductForm;


const Form = styled.form`
  width: 100%;
  max-width: 1080px;
  padding: 8px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  gap: 12px;
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
  padding: 12px 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  border-bottom: 1px solid #C4C4C4;
  

  ::placeholder {
    color: #C4C4C4;
    font-size: 14px;
    font-weight: 600;
  }
`
const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  border-bottom: 1px solid #C4C4C4;
  resize: vertical;
  max-height: 120px;
  min-height: 60px;
  

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
const RegistertButton = styled.button`
  width: 100%;
  min-height: 3rem;
  margin: 0;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);

  background-color: #5A189A;
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  color: #fff;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
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
    background-color: #5A189A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`