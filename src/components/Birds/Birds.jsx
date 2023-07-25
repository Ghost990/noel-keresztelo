import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Lottie from "lottie-react";
import BirdsAnimation from '../../assets/birds.json'


const BirdsWrapper = styled.div``

const Birds = () => {
    const animation = useRef(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         animation.current.play();
    //     }
    //         , 4000)
    // }, [])

    const MINUTE_MS = 5000;

    useEffect(() => {
      const interval = setInterval(() => {
        animation.current.play();
      }, MINUTE_MS);
    
      return () => clearInterval(interval);
    }, [])

  return (
    <BirdsWrapper><Lottie loop={true} lottieRef={animation} animationData={BirdsAnimation} autoplay={true} /></BirdsWrapper>
  )
}

export default Birds