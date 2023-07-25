import React from 'react'
import styled from 'styled-components'
import Lottie from "lottie-react"
import SlothAnimation from '../../assets/sloth.json'

const SlothWrapper = styled.div`
    overflow: hidden;
`

const Sloth = () => {
  return (
    <SlothWrapper className='animate__animated animate__fadeInLeft animate__delay-1s'>
        <Lottie loop={true} animationData={SlothAnimation} autoplay={true} />
    </SlothWrapper>
  )
}

export default Sloth