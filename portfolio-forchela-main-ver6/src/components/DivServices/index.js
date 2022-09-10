import React, {useState, useEffect} from 'react'
import ImgBg from '../../assets/img/image1.png'
import { ServicesContainer, ServicesRightWrapper, ServicesLeftWrapper, ImgCard, BgImg, TextWrapper, ServicesH1, ServicesP, CardButtonWrapper } from './ServicesElements'
import { BtnLink } from '../DivMeio/MeioElements'
import { ArrowForward } from '../BannerHome/BannerElements'
import axios from 'axios';
import { Button } from '../ButtonElement'

const DivServices = () => {

  const [hover, setHover] = useState(false)
  const [Produto, setProduto] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/servicos/produto`);
        setProduto(res.data);
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
  
  const getProdutosRight = () => {
    let list = [];
    let right = [];

    Produto.map(ProdutosMap => {
      return list.push(
        <ImgCard>
          <BgImg src={ProdutosMap.imagem} />
          <TextWrapper>
            <ServicesH1>{ProdutosMap.titulo}</ServicesH1>
            <ServicesP>{ProdutosMap.sub_titulo}</ServicesP>
            <CardButtonWrapper>
              <Button onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                  <BtnLink to="contato">
                    <ArrowForward />
                  </BtnLink>
              </Button>
            </CardButtonWrapper>
          </TextWrapper>
        </ImgCard>
      );
    });

    for (let i = 0; i < list.length; i += 1){
      if (i % 2 === 0 || i === 0){
        right.push(
          <>
            {list[i]}
          </>
        )
      }
    }

    return right;
  };

  const getProdutosLeft = () => {
    let list = [];
    let left = [];

    Produto.map(ProdutosMap => {
      return list.push(
        <ImgCard>
          <BgImg src={ProdutosMap.imagem} />
          <TextWrapper>
            <ServicesH1>{ProdutosMap.titulo}</ServicesH1>
            <ServicesP>{ProdutosMap.sub_titulo}</ServicesP>
            <CardButtonWrapper>
              <Button onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                  <BtnLink to="contato">
                    <ArrowForward />
                  </BtnLink>
              </Button>
            </CardButtonWrapper>
          </TextWrapper>
        </ImgCard>
      );
    });

    for (let i = 0; i < list.length; i += 1){
      console.log(i)
      if (i % 2 !== 0){
        left.push(
          <>
            {list[i]}
          </>
        )
      }
    }

    return left;
  };



  return (
    <ServicesContainer>
      <ServicesRightWrapper>
      {getProdutosRight()}
      </ServicesRightWrapper>
      <ServicesLeftWrapper>
      {getProdutosLeft()}
      </ServicesLeftWrapper>
    </ServicesContainer>
  )
}

export default DivServices
