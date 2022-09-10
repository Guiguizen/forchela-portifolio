import React from "react";
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksS} from './NavBarElements'
import { animateScroll as Scroll } from 'react-scroll' 
import logo from '../../assets/img/logo2.png'

const NavBar = ({ toggle }) => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><img style={{width: '100%'}} src={logo} /></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services">Serviços</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about">Sobre Nós</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="contato">Fale Conosco</NavLinksS>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar;