import styled from "styled-components";

export const BannerContainer3 = styled.div`
  margin-top: 20px;
  margin-right: -80px;
  padding-left: 10%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.87) 0%, #000000 100%);
  display: flex;
  justify-content: start;
  align-items: center;
  height: 300px;
  position: relative;
  z-index: 5;
  
  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }

`

export const BannerBg3 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;    
`

export const BannerH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  

  @media screen and (max-width: 768px){
    font-size: 40px;
  }

  @media screen (max-width: 480px) {
    font-size: 32px;
  }
`

export const BannerContent = styled.div`
  z-index: 3;
  max-width: 1600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  
`