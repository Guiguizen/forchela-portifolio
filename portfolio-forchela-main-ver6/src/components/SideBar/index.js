import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu,
SidebarLink, SidebarLinkS } from './SideBarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">
            Home
          </SidebarLink>
          <SidebarLink to="/services">
            Serviços
          </SidebarLink>
          <SidebarLink to="/about">
            Sobre Nós
          </SidebarLink>
          <SidebarLinkS to="contato">
            Fale Conosco
          </SidebarLinkS>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
 