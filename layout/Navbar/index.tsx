import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Badge, Bag, Container, Logo, Wrapper } from "./styles";
import { useSelector } from "react-redux";
import Image from "next/image";

const Navbar = ({toggle, toggleCart} : any) => {
  const cart = useSelector((state: any) => state.cart);

  return ( 
    <Container>
      <Wrapper>
        <FaBars style={{cursor: "pointer"}} color="#F6F6F6" size={24} onClick={toggle} />
        <Logo href={'/'} ><Image src={'/assets/images/img/EasyPhoneLogoWhiteTransparent.png'} alt='Easy Phone Logo' fill /></Logo>
        <Bag>
          <FaBagShopping color="#F6F6F6" size={24} onClick={toggleCart}></FaBagShopping>
          <Badge>{cart.reduce((acc:any, curr:any) => acc + curr.quantity, 0)}</Badge>
        </Bag>
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;