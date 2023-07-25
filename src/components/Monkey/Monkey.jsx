import React from 'react'
import styled from 'styled-components'
import Lottie from "lottie-react"
import MonkeyAnimation from '../../assets/monkey.lottie'

const MonkeyWrapper = styled.div``

const Monkey = () => {
  return (
    <MonkeyWrapper><Lottie loop={true} lottieRef={animation} animationData={MonkeyAnimation} autoplay={true} /></MonkeyWrapper>
  )
}

export default Monkey