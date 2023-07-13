import React, {useRef, useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import Lottie from "lottie-react";
import GiftAnim from '../../assets/gift.json'

const GiftAnimation = keyframes`
    0% {
        transform: rotate(-2deg);
    }
    50% {
        transform: rotate(2deg);
    }
    100% {
        transform: rotate(-2deg);
    }
`

const ShakeAnimation = keyframes`
     10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

const GiftWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: ${GiftAnimation} 1s infinite;
    
`

const Gift = () => {
    const animation = useRef(null)

    const handlePlayAnimation = () => {
        animation.current.play();
    }

  return (
    <GiftWrapper>
        <Lottie onClick={handlePlayAnimation} loop={false} lottieRef={animation} animationData={GiftAnim} autoplay={false} />
    </GiftWrapper>
  )
}

export default Gift