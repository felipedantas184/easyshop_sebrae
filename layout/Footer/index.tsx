import Image from "next/image";
import { Container, Copyright, CopyrightSpan, Grid, Group, List, ListItem, LogoWrapper, SocialItem, SocialNav, TextWrapper, Title, Wrapper } from "./styles";
import { FaCreditCard, FaEnvelope, FaFacebook, FaInstagram, FaMobile, FaTruck } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Image src={'/vercel.svg'} alt={'Logo'} fill className={'image'} />
        </LogoWrapper>
        <Grid>
          <TextWrapper>
            <Group>
              <FaTruck size={16} color="#F6F6F6" />
              <Title>Entrega</Title>
            </Group>
            <List>
              <ListItem>Retirada na loja</ListItem>
              <ListItem>Entrega a domicílio</ListItem>
              <ListItem>Frete a combinar</ListItem>
            </List>
          </TextWrapper>
          <TextWrapper>
            <Group>
              <FaCreditCard size={16} color="#F6F6F6" />
              <Title>Pagamento</Title>
            </Group>
            <List>
              <ListItem>Pagar no Pix</ListItem>
              <ListItem>Cartão de Crédito</ListItem>
              <ListItem>Cartão de Débito</ListItem>
            </List>
          </TextWrapper>
          <TextWrapper>
            <Group>
              <FaMobile size={16} color="#F6F6F6" />
              <Title>Redes Sociais</Title>
            </Group>
            <List>
              <SocialItem>
                <a target='_blank' href='https://pt-br.facebook.com/adufpi/' arial-label='Instagram'><FaFacebook size={18} color={'#F6F6F6'} />Facebook</a>
              </SocialItem>
              <SocialItem>
                <a target='_blank' href='https://www.instagram.com/adufpi/' arial-label='Facebook'><FaInstagram size={18} color={'#F6F6F6'} />Instagram</a>
              </SocialItem>
              <SocialItem>
                <a target='_blank' href='mailto:secretaria@adufpi.org.br' arial-label='Email'><FaEnvelope size={18} color={'#F6F6F6'} />Email</a>
              </SocialItem>
            </List>
          </TextWrapper>
        </Grid>
      </Wrapper>
      <Copyright>
        <CopyrightSpan>Felipe Dantas @ 2024</CopyrightSpan>
      </Copyright>
    </Container>
  );
}

export default Footer;