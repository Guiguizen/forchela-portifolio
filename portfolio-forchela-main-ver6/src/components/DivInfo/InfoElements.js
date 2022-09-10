import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  display: flex;

  @media screen and (max-width: 768px){
    padding: 100px 0;
    margin: 30px;
  }
`

export const InfoWrapper = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px){
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
`


export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  margin: 30px;
  margin-top: 10;
  display: flex;
  flex-direction: column


`

export const TopLine = styled.p`
  color: #656079;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 480px){
    font-size: 32px;  
  }
`

export const Subtitle = styled.p`
  color: #656079;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`

export const  BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`