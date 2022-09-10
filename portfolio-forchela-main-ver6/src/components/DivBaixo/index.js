import { Carousel } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import { BaixoContainer, BaixoWrapper, CarouselImage, CarouselImageCard, CarouselWrapper, Heading, Subtitle, TextWrapper, CarouselLink } from './BaixoElements'
import Image1 from '../../assets/img/image1.png'
import Image2 from '../../assets/img/image2.png'
import Image3 from '../../assets/img/image3.png'
import axios from 'axios';

const DivBaixo = () => {

  const [DivBaixo, setDivBaixo] = useState([]);

  useEffect(() =>{
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/home/div-baixo`);
        setDivBaixo(res.data[0]);
        //console.log(res.data)
      }
      catch (error) {
        
      }
    }

    fetchData();
  }, []);

  return (
    <BaixoContainer>
        <BaixoWrapper>
            <TextWrapper>
                <Heading>{DivBaixo.titulo}</Heading>
                <Subtitle>{DivBaixo.texto}</Subtitle>
            </TextWrapper>
            <CarouselWrapper>
              <CarouselImageCard>
                <CarouselLink to="/services">
                <CarouselImage src={DivBaixo.imagem1} />
                </CarouselLink>
                <CarouselLink to="/services">
                <CarouselImage src={DivBaixo.imagem2} />
                </CarouselLink>
                <CarouselLink to="/services">
                <CarouselImage src={DivBaixo.imagem3} />
                </CarouselLink>
              </CarouselImageCard>
            </CarouselWrapper>
        </BaixoWrapper>
    </BaixoContainer>
  )
}

export default DivBaixo
