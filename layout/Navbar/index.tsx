import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Badge, Bag, Container, Wrapper } from "./styles";
import { useSelector } from "react-redux";

const Navbar = ({toggle, toggleCart} : any) => {
  const cart = useSelector((state: any) => state.cart);

  return ( 
    <Container>
      <Wrapper>
        <FaBars style={{cursor: "pointer"}} color="#F6F6F6" size={24} onClick={toggle} />
        <Bag>
          <FaBagShopping color="#F6F6F6" size={24} onClick={toggleCart}></FaBagShopping>
          <Badge>{cart.reduce((acc:any, curr:any) => acc + curr.quantity, 0)}</Badge>
        </Bag>
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;