import React, {useState, useEffect} from 'react'
import { CardButtonWrapper, AboutContainer, AboutWrapper, MeioWrapper, TitleH1, AboutH1, AboutN, AboutP, TextWrapper, BaixoWrapper, Title1Wrapper, Title2Wrapper } from './DivAboutElements'
import { BtnLink } from '../DivMeio/MeioElements'
import axios from 'axios';
import { ArrowForward } from '../BannerHome/BannerElements'
import { Button } from '../ButtonElement'


const DivAbout = () => {

    const [hover, setHover] = useState(false)
    const [DivMeio, setDivMeio] = useState([]);
    const [DivBaixo, setDivBaixo] = useState([]);
    const [Card, setCard] = useState([]);

    useEffect(() =>{
      const fetchData = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sobre-nos/div-meio`);
          setDivMeio(res.data[0]);
        }
        catch (error) {
          
        }
      }
  
      fetchData();

      const getData = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sobre-nos/div-baixo`);
          setDivBaixo(res.data[0]);
        }
        catch (error) {
          
        }
      }
  
      getData();

      const pushData = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sobre-nos/card`);
          setCard(res.data[0]);
        }
        catch (error) {
          
        }
      }
  
      pushData();
    }, []);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <AboutContainer>
        <AboutWrapper>
            <MeioWrapper>
                <TextWrapper>
                    <AboutH1>{DivMeio.titulo}</AboutH1>
                    <AboutN>{DivMeio.sub_titulo}</AboutN>
                    <AboutP>{DivMeio.texto}</AboutP>
                </TextWrapper>
            </MeioWrapper>

            <BaixoWrapper>
                <Title2Wrapper>
                    <TextWrapper>
                        <TitleH1>{DivBaixo.titulo}</TitleH1>
                        <AboutP>{DivBaixo.texto}</AboutP>
                    </TextWrapper>
                </Title2Wrapper>
                <Title1Wrapper>
                    <TextWrapper>
                        <AboutH1>{Card.titulo}</AboutH1>
                        <AboutP>{Card.texto}</AboutP>
                        <CardButtonWrapper>
                            <Button onMouseEnter={onHover}
                                onMouseLeave={onHover}
                                primary='true'
                                dark='true'
                                
                                >
                                <BtnLink to="/services">
                                <ArrowForward />
                                </BtnLink>
                            </Button>
                        </CardButtonWrapper>
                    </TextWrapper>
                </Title1Wrapper>
            </BaixoWrapper>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default DivAbout
