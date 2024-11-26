import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { Close, Container, Item, Logo, Menu, PageLink, CheckoutButton, Wrapper, TitleWrapper, BigWrapper, PageInternalLink, LogoutButton, Span } from "./styles";
import { FaRegEnvelope, FaHouse, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const Sidebar = ({ isOpen, toggle }: any) => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <Container $isOpen={isOpen}>
      <Wrapper>
        <BigWrapper>
          <TitleWrapper>
            <Logo href={'/'} ><Image src={'/assets/images/img/EasyPhoneLogoTransparent.png'} alt='Easy Phone Logo' fill /></Logo>
            <Close onClick={toggle}>
              <FaTimes color="#13131A" />
            </Close>
          </TitleWrapper>
          <Menu>
            <Item><PageInternalLink href={'/'}><FaHouse size={20} color="#13131A" />Página Inicial</PageInternalLink></Item>
            <Item><PageLink target='_blank' href='https://www.instagram.com/easyshop.pi/' arial-label='Instagram'><FaInstagram size={20} color="#13131A" />Instagram</PageLink></Item>
            <Item><PageLink target='_blank' href='https://www.instagram.com/easyshop.pi/' arial-label='Facebook'><FaFacebook size={20} color="#13131A" />Facebook</PageLink></Item>
            <Item><PageLink target='_blank' href='https://maps.app.goo.gl/jPSt5QCpzHwX4ECd6' arial-label='Google Maps'><IoLocationOutline size={20} color="#13131A" />Localização</PageLink></Item>
            <Item><PageLink target='_blank' href='mailto:easyshop.piaui@gmail.com' arial-label='Email'><FaRegEnvelope size={20} color="#13131A" />Email</PageLink></Item>
          </Menu>
        </BigWrapper>
        {(user) ? (
          <div style={{display: 'flex', flexDirection: 'column', maxWidth: 300, width: '100%', justifyContent: 'center', alignItems: 'center'}} >
            <Span>{user.email}</Span>
            <LogoutButton onClick={() => { logout(); router.push('/') }}>Logout</LogoutButton>
          </div>
        ) : (
          <CheckoutButton href={`https://wa.me//5586995185757?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20Easy%20Shop!`}><FaWhatsapp size={18} />Mandar mensagem</CheckoutButton>
        )}
      </Wrapper>
    </Container>
  );
}

export default Sidebar;