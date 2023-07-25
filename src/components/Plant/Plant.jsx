import React from 'react'
import styled from 'styled-components'
import PlantImage from '../../assets/plant1.svg'

const PlantWrapper = styled.div`
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
        opacity: 0.2;
        z-index: -1;
    }
    .animate__animated.animate__fadeInLeft {
        --animate-duration: 1.5s;
    }
`

const PlantTopLeft = styled.div`
    position: fixed;
    top: -50px;
    left: -50px;
    width: 25%;
`

const PlantBottomRight = styled.div`
    position: fixed;
    right: -50px;
    left: 80%;
    bottom: -50px;
    transform: rotate(180deg);
    width: 25%;
`

const Plant = () => {
  return (
    <PlantWrapper>
        <PlantTopLeft>
            <img src={PlantImage} width={300} alt="Plant" className='animate__animated animate__fadeInLeft' />
        </PlantTopLeft>
        <PlantBottomRight>
            <img src={PlantImage} width={300} alt="Plant" className='animate__animated animate__fadeInLeft' />
        </PlantBottomRight>
    </PlantWrapper>
  )
}

export default Plant