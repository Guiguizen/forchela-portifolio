import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const MeioContainer = styled.div`
  height: 541px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: linear-gradient(180deg, #111111 0%, #000000 100%);

  @media screen and (max-width: 768px){
    height: 1100px;
  }

  @media screen and (max-width: 480px){
    height: 1300px;
  }
`

export const MeioWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`

export const CardImage = styled.div`
    width: 642px;
    height: 444px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    margin: 30px;
    margin-right: 10px;
    margin-left: 200px;

    @media screen and (max-width: 768px){
      margin: 0
    }
`

export const Image = styled.img`
    
    width: 642px;
    height: 444px;

    @media screen and (max-width: 768px){
      width: 90%;
      height: 90%;
      margin-left: 30px;
    }
`

export const CardText = styled.div`
   width: 550px;
    height: 444px;
    margin: 30px;
    background: #16141B;
    border-radius: 20px;
`

export const TextWrapper = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: #fff;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
`

export const Text = styled.p`
    color: #656079;
    max-width: 440px;
    margin-bottom: -10px;
    font-size: 18px;
    line-height: 24px;
`

export const CardButtonWrapper = styled.div`
  margin-right: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BtnLink = styled(LinkR)`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`