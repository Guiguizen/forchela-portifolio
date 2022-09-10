import styled from "styled-components";

export const AboutContainer = styled.div`
    margin-top: 20px;
   
    padding-left: 10%;
    background: #fff;
    display: flex;
    
    height: 100%;
    position: relative;
    z-index: 5;

    @media screen and (max-width: 768px){
        flex-direction: clomun
      }

      
`

export const AboutWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        margin: 0 auto;
        justify-content: none;
        align-items: none;
    }
`

export const MeioWrapper = styled.div`
    display: flex;

    flex-direction: row;
    width: 1280px;
    height: 557px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    background: #0D0D0D;

    @media screen and (max-width: 768px){
        width: 50%
        
      }
`

export const BaixoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 557px;
    background: #fff;
    
    @media screen and (max-width: 768px){
        width: 50%;
        flex-direction: column;
        height: 1000px;
      }
`

export const TextWrapper = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 30px;
    width: 1100px;
    height: 400px;
    border-radius: 10px;

    
`

export const TextWrapper2 = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 30px;
    width: 1100px;
    height: 400px;
    border-radius: 10px;

    @media screen and (max-width: 768px){

      }
`

export const Title2Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 645px;
    height: 390px;
    background: #fff
`

export const Title1Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 645px;
    height: 390px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    margin: 30px;
    background: #0D0D0D
    
`

export const AboutH1 = styled.h1`
    color: #fff;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
`

export const TitleH1 = styled.h1`
    color: #000 ;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
`

export const AboutN = styled.p`
    color: #fff;
    max-width: 1000px;
    font-size: 18px;
    line-height: 24px;
`

export const AboutP = styled.p`
    color: #656079;
    max-width: 1000px;
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;
`

export const CardButtonWrapper = styled.div`
  margin-right: 70%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`