import React, {useState, useEffect} from 'react'
import { Button } from '../ButtonElement';
import axios from 'axios';

import { Heading, InfoWrapper, Subtitle, TextWrapper } from './InfoElements'


const DivInfo = () => {

  const [DivInformacao, setDivInformacao] = useState([]);

  useEffect(() =>{
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/home/div-informacao`);
        setDivInformacao(res.data[0]);
        //console.log(res.data)
      }
      catch (error) {
        
      }
    }

    fetchData();
  }, []);  

  return (
    <>
      <InfoWrapper>
        <TextWrapper>
            <Heading>{DivInformacao.titulo1}</Heading>
            <Subtitle>{DivInformacao.texto1}</Subtitle>
        </TextWrapper>
        <TextWrapper>
            <Heading>{DivInformacao.titulo2}</Heading>
            <Subtitle>{DivInformacao.texto2}</Subtitle>
        </TextWrapper>
        <TextWrapper>
            <Heading>{DivInformacao.titulo3}</Heading>
            <Subtitle>{DivInformacao.texto3}</Subtitle>
        </TextWrapper>
      </InfoWrapper>
    </>
  )
}

export default DivInfo
