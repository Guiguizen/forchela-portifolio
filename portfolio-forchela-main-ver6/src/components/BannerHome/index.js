import React, {useState, useEffect} from 'react'
import Image from '../../assets/img/bannerbg.png';
import { Button } from '../ButtonElement';
import axios from 'axios';
import { BannerContainer, BannerContent, BannerBg, Banner, BannerH1, BannerP, BannerBtnWrapper, ArrowForward, ArrowRight } from './BannerElements'
 
const BannerHome = () => {
  const [hover, setHover] = useState(false)
  const [DivTopo, setDivTopo] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/home/div-topo`);
        setDivTopo(res.data[0]);
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
    <BannerContainer id="home">
      <BannerBg>
        <Banner src={Image} />
      </BannerBg>
      <BannerContent>
        <BannerH1>{DivTopo.titulo}</BannerH1>
        <BannerP>
        {DivTopo.sub_titulo}
        </BannerP>
        <BannerBtnWrapper>
          <Button to='signup'
           onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            
            >
            Faça um orçamento {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BannerBtnWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default BannerHome
