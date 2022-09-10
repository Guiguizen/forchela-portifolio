import React, {useState, useEffect} from 'react'
import { BannerContent, BannerBg, Banner, BannerH1, ArrowForward, ArrowRight } from '../BannerHome/BannerElements'
import { BannerBg2, BannerContainer2, BannerBtnWrapper } from '../BannerServices/BannerServicesElements'
import { Button } from '../ButtonElement';
import axios from 'axios';
import Image from '../../assets/img/bannerbg.png';


const BannerServices = () => {

  const [hover, setHover] = useState(false)
  const [BannerServico, setBannerServico] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/servicos/div-topo`);
        setBannerServico(res.data[0]);
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
    <BannerContainer2>
        <BannerBg2>
        <Banner src={Image} />
        </BannerBg2>    
            <BannerContent>
                <BannerH1>{BannerServico.titulo}</BannerH1>
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
        
    </BannerContainer2>
  )
}

export default BannerServices
