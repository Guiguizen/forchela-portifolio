import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Heading } from '../DivInfo/InfoElements'
import { FooterSocial, Footer2Container, FooterWrap, FooterLinksContainer, FooterLinksItems, FooterLinkTitle, FooterLink, FooterLinksWrapper } from './Footer2Elements'

const Footer2 = () => {

  const [Footer, setFooter] = useState([]);

  useEffect(() =>{
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/home/footer`);
        setFooter(res.data[0]);
        //console.log(res.data)
      }
      catch (error) {
        
      }
    }

    fetchData();
  }, []);


  return (
    <Footer2Container> 
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Atendimento ao cliente</FooterLinkTitle>
                  <FooterSocial href="https://api.whatsapp.com/message/HZGY2ELC6CGBM1?autoload=1&app_absent=0">{Footer.telefone}</FooterSocial>
                  <FooterLink to="/services">{Footer.email}</FooterLink>          
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Forchela</FooterLinkTitle>
                  <FooterLink to="/services">Serviços</FooterLink>
                  <FooterLink to="/about">Sobre Nós</FooterLink>     
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Siga-nos</FooterLinkTitle>
                  <FooterSocial href={Footer.link_instagram}>Instagram</FooterSocial>
                  <FooterSocial href={Footer.link_facebook}>Facebook</FooterSocial>           
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
    </Footer2Container>
  )
}

export default Footer2
