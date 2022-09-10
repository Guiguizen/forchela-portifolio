import styled from "styled-components";
import { Link as LinkR } from "react-router-dom"

export const BaixoContainer = styled.div`
height: 541px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
background: #fff;

@media screen and (max-width: 1400px){
  height: 1100px;
}

@media screen and (max-width: 480px){
  height: 1300px;
}

@media screen and (max-width: 1400px){
    
  flex-direction: column;
}
`

export const BaixoWrapper = styled.div`
  
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;
  display: flex;
  flex-direction: row
  

  @media screen and (max-width: 1400px){
    height: 100%;
  }
  

  @media screen and (max-width: 1400px){
    
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin: 80px;
    margin-top: 10;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1400px){
      margin-bottom: -30px
    }
`

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 1400px){
    font-size: 28px;  
  }
`

export const Subtitle = styled.p`
  color: #656079;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  
`

export const CarouselWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  margin: 80px;
  margin-top: 10;
  display: flex;
  flex-direction: row;
  margin: -30px;
    margin-right: 30%;
  

  @media screen and (max-width: 1400px){
    height: 100%;
    flex-diretion: column;
    justify-content: center;
    align-items: center;
    margin: -30px;
    margin-right: 250px;
    margin-bottom: 40px;
    margin-top: -50;
  }
`

export const CarouselImageCard = styled.div`
max-width: 300px;
  padding-top: 0;
  padding-bottom: 60px;
  margin: 80px;
  margin-top: 10;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 359px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
    margin: 30px;
    margin-right: 150px;
    

    @media screen and (max-width: 1400px){
      flex-diretion: column;
    }
`

export const CarouselImage = styled.img`
  width: 284px;
  height: 359px;
  margin-right: 30px;

 &:before{
   content:'';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 1;
   background: linear-gradient(180deg,#77777e,#1a1a1d);
   mix-blend-mode: multiply;
   opacity: 0;
   transition: 0.5s;
 };

 &:hover{
  opacity: 0.9;
  transition: 0.2s;
 };

 
 @media screen and (max-width: 820px){
  width: 180px;
  height: 280px
 }


`

export const CarouselLink = styled(LinkR)`
  margin-bottom: -90px;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  
`