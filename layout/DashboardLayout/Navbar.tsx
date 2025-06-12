import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Navbar = ({toggle} : any) => {

  return ( 
    <Container>
      <Wrapper>
        <Logo href={'/'} ><Image src={'/assets/images/img/EasyPhoneLogoWhiteTransparent.png'} alt='Easy Phone Logo' fill /></Logo>
        <FaBars style={{cursor: "pointer"}} color="#F6F6F6" size={24} onClick={toggle} />
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;



const Container = styled.header`
  background: #2694A7;
  height: 60px;

  display: flex;
  align-items: center;
`
const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
  -webkit-tap-highlight-color: transparent;
`
export const Logo = styled(Link)`
  position: relative;
  width: 100px;
  height: 50px;
  text-decoration: none;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent; 
`