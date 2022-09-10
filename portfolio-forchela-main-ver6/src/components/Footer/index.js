import React, {useState} from 'react'
import Forchela from '../../assets/img/Branca1.png'
import { Button } from '../ButtonElement'
import axios from 'axios';
import { ContatoWrapper, EmailInput, FooterContainer, NameInput, TextInput, Title, BtnWrapper, LogoWrapper, LogoImg, FooterWrapper, BudgetWrapper } from './FooterElements'

const Footer = () => {

  const [hover, setHover] = useState(false)
  const [EmailValue, setEmailValue] = useState('');
  const [TextoValue, setTextoValue] = useState('');
  const [NomeValue, setNomeValue] = useState('');

  const onHover = () => {
    setHover(!hover)
  }

  const pythonMandarEmail = async () => {
    try {
      const resp = await axios.post(`${process.env.REACT_APP_API_URL}/api/emails/emails`, {email_origem: EmailValue, 
        nome: NomeValue, texto: TextoValue});
        alert('Email enviado com sucesso');
    } catch (error){
      console.log(error.response);
      alert('Insira um e-mail Válido!');
    }
  }

  return (
    <><FooterContainer id={'contato'}>
      <BudgetWrapper>
        <ContatoWrapper>
          <Title>FAÇA SEU ORÇAMENTO</Title>
          <NameInput
            placeholderTextColor="#fff"
            id='Nome'
            placeholder='Insira seu nome'
            value={NomeValue}
            onChange={(event) => {
              setNomeValue(event.target.value)
            } } />
          <EmailInput
            placeholderTextColor="#fff"
            value={EmailValue}
            onChange={(event) => {
              setEmailValue(event.target.value)
            } }
            placeholder='Insira seu email' />
          <TextInput
            placeholderTextColor="#fff"
            id='Mensagem'
            placeholder='Escreva sua mensagem'
            value={TextoValue}
            onChange={(event) => {
              setTextoValue(event.target.value)
            } } />
          <BtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              onMouseDown={pythonMandarEmail}
              primary='true'
              dark='true'
              fontBig='true'
              big='true'>
              Enviar
            </Button>
          </BtnWrapper>
        </ContatoWrapper>
        <LogoWrapper>
          <LogoImg src={Forchela} />
        </LogoWrapper>
      </BudgetWrapper>
    </FooterContainer>
    </>
  )
}

export default Footer
