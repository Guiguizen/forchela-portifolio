import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonElement'
import image4 from '../../assets/img/image4.png'
import axios from 'axios';
import { BtnLink, MeioContainer, MeioWrapper, CardImage, Image, CardText, Title, Text, TextWrapper, CardButtonWrapper} from './MeioElements'

const DivMeio = () => {

  const [hover, setHover] = useState(false)
  const [DivMeio, setDivMeio] = useState([]);

  useEffect(() =>{
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/home/div-meio`);
        setDivMeio(res.data[0]);
        //console.log(res.data)
      }
      catch (error) {
        
      }
    }

    fetchData();
  }, []);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <MeioContainer>
      <MeioWrapper>
        <CardImage>
          <Image src={image4} />
        </CardImage>
        <CardText>
          <TextWrapper>
          <Title>{DivMeio.titulo}</Title>
          <Text>{DivMeio.texto}</Text>
          </TextWrapper>
          <CardButtonWrapper>
          <Button onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            fontBig='true'
            big='true'
            >
              <BtnLink to="/services">
                SAIBA MAIS
              </BtnLink>
            </Button>
          </CardButtonWrapper>
        </CardText>
        
      </MeioWrapper>
    </MeioContainer>
  )
}

export default DivMeio
