import { useEffect, useState } from "react";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Personal from "./Personal";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, doc, increment, updateDoc } from "firebase/firestore";
import fireDB from "@/firebase/initFirebase";
import { removeFromCart } from "@/redux/cart.slice";
import { useRouter } from "next/router";
import { addOrder } from "@/redux/order.slice";
import { IoLocationSharp } from "react-icons/io5";
import { FaTruck, FaUser, FaWallet } from "react-icons/fa6";
import styled from "styled-components";
import { sendOrderEmail } from "@/lib/api";

const CheckoutForm = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter()

  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
  })
  const [pickUp, setPickUp] = useState(true);
  const [delivery, setDelivery] = useState({
    zipCode: '',
    address: '',
    complement: '',
    district: '',
    number: '',
    city: '',
    state: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('Pix');
  const [mesage, setMesage] = useState('');
  const cartOrder: any[] = []

  useEffect(() => {
    const deliveryMesageComposure = '*_Informações da Entrega:_*%0A' + delivery.address + ', ' + delivery.number + ' - ' + delivery.complement + '%0A' + delivery.zipCode + '%0A' + delivery.city + ', ' + delivery.state
    const PersonalMesageComposure = '*_Informações da Cliente:_*%0A' + "```" + personal.name + '%0A' + personal.email + '%0A' + personal.phone + "```"
    const cartMesageComposure = cart.reduce(function (prevVal: any, currVal: any, idx: any) {
      return idx == 0 ? Number(idx + 1) + '. ' + "```" + currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}` : prevVal + '%0A%0A' + Number(idx + 1) + '. ' + "```" + currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}`;
    }, '')
    setMesage("*RESUMO DA COMPRA*%0A%0A" + PersonalMesageComposure + '%0A%0A_______________________%0A%0A' + deliveryMesageComposure + '%0A%0A_______________________%0A%0A' + '*_Informações do Pedido:_*%0A%0A' + cartMesageComposure + '%0A%0A_______________________%0A%0A' + `*Total: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc: any, curr: any) => acc + curr.price, 0))}*`)
    console.log(mesage)

  }, [cart, delivery, personal])

  const date = new Date();
  const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

  const handleOrder = async (e: any) => {
    e.preventDefault()
    cart.forEach((item: any) => {
      const obj = {
        id: item.id,
        quantity: item.quantity,
      }
      cartOrder.push(obj)
    });
    try {
      addDoc(collection(fireDB, "orders"), {
        personal: personal,
        cart: cartOrder,
        delivery: pickUp ? null : delivery,
        deliveryType: pickUp ? 'pickup' : 'delivery',
        paymentMethod: paymentMethod,
        amount: cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0),
        date: currentDate
      }).then(function (docRef) {
        dispatch(addOrder({
          id: docRef.id,
          personal: personal,
          cart: cart,
          delivery: pickUp ? null : delivery,
          deliveryType: pickUp ? 'pickup' : 'delivery',
          paymentMethod: paymentMethod,
          amount: cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0),
          date: currentDate
        }))
        try {
          sendOrderEmail({
            id: docRef.id,
            personal: personal,
            cart: cart,
            delivery: pickUp ? null : delivery,
            deliveryType: pickUp ? 'pickup' : 'delivery',
            paymentMethod: paymentMethod,
            amount: cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0),
            date: currentDate
          })
        } catch (error) {
          alert(error)
        }
        localStorage.setItem("wpp-catalog-order", JSON.stringify({
          id: docRef.id,
          personal: personal,
          cart: cart,
          delivery: pickUp ? null : delivery,
          deliveryType: pickUp ? 'pickup' : 'delivery',
          paymentMethod: paymentMethod,
          amount: cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0),
          date: currentDate
        }))
        localStorage.removeItem("wpp-catalog-cart")
        cart.map((item: any) => (
          updateDoc(doc(fireDB, "products", item.id), {
            stock: increment(-item.quantity),
          })
        ))
      }).then(
        cart.map((item: any) => (
          dispatch(removeFromCart(item))
        ))
      )
      alert("Pedido eviado com sucesso!")

      router.push({ pathname: '/confirmation' })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Wrapper onSubmit={handleOrder} >
      <Title><FaUser />Comprador</Title>
      <Personal personal={personal} setPersonal={setPersonal} />
      <Divider />
      <Title><FaTruck />Entrega</Title>
      <RadioButtons>
        <RadioInput type="radio" name="size" id="small" checked={pickUp} />
        <RadioLabel htmlFor="small" onClick={() => setPickUp(true)}><IoLocationSharp />Retirar na Loja</RadioLabel>

        <RadioInput type="radio" name="size" id="big" checked={!pickUp} />
        <RadioLabel htmlFor="big" onClick={() => setPickUp(false)} ><FaTruck />Entrega em Casa</RadioLabel>
      </RadioButtons>
      {(!pickUp) ? (
        <Delivery delivery={delivery} setDelivery={setDelivery} />
      ) : (<></>)}
      <Divider />
      <Title><FaWallet />Pagamento</Title>
      <Payment paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <Divider />
      <TopicWrapper>
        <Topic>Total</Topic>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0))}</Price>
      </TopicWrapper>
      <CheckoutButton type="submit" >Finalizar Pedido</CheckoutButton>
      {/** <a href={`https://wa.me//5586995185757?text=${mesage}`}>Bora</a>*/}
    </Wrapper>
  );
}

export default CheckoutForm;




const Wrapper = styled.form`
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
const Title = styled.h1`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
  align-self: flex-start;

  display: flex;
  align-items: center;
  gap: 4px;
`
const Divider = styled.div`
  width: 100%;
  margin-top: 8px;
  border-top: 1px dotted #BBB;
`
const TopicWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Topic = styled.span`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;
`
const Price = styled.span`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
`
const CheckoutButton = styled.button`
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
const RadioButtons = styled.div`
  align-self: flex-start;
  padding: 4px; 
   
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #01cc65;
    color: #FFFFFF;
  }
`
const RadioLabel = styled.label`
  position: relative;
  color: #01cc65;
  font-family: "Montserrat";
  font-size: 16px;
  border: 2px solid #01cc65;
  border-radius: 5px;
  padding: 8px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`