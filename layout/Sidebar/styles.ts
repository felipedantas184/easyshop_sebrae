import Link from "next/link";
import styled from "styled-components";

interface Props {
  $isOpen: any
}

export const Container = styled.nav<Props>`
  background: #F6F6F6;
  padding: 25px 0;
  
  top: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  width: 80%;
  height: 100%;

  opacity: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
  right: ${({ $isOpen }) => ($isOpen ? '20%' : '100%')};
  transition: 0.7s ease-in-out;

  border-radius: 0 10px 10px 0;
  box-shadow: rgba(99, 99, 99, 0.8) 0px 2px 8px 0px;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`
export const BigWrapper = styled.div`
  width: 100%;   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;
`
export const TitleWrapper = styled.div`
  width: 100%;   
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled(Link)`
  position: relative;
  width: 150px;
  height: 44px;
  text-decoration: none;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent; 
`
export const Close = styled.div`
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  -webkit-tap-highlight-color: transparent;
  user-select: none
`
export const Menu = styled.ul`
  width: 100%;  
  list-style: none;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
export const Item = styled.li`
  color: #13131A;
  font-size: 16px;
  font-weight: 500;
  width: 80%;
  
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  user-select: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #EB5757;
    transition: 0.2s ease-in-out;
  }
  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #EB5757;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`
export const PageLink = styled(Link)`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat', sans-serif;
`
export const BWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const CheckoutButton = styled(Link)`
  width: 100%;
  min-height: 3rem;
  margin: 0;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);

  background-color: #01cc65;
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
  gap: 8px;
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