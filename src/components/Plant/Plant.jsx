import React from 'react'
import styled from 'styled-components'
import PlantImage from '../../assets/plant1.svg'

const PlantWrapper = styled.div`
    position: relative;
    @media (max-width: 768px) {
        opacity: 0.2;
    }
`

const PlantTopLeft = styled.div`
    position: fixed;
    top: -50px;
    left: -50px;
    width: 100%;
`

const PlantBottomRight = styled.div`
    position: fixed;
    right: -50px;
    left: 80%;
    bottom: -50px;
    transform: rotate(180deg);
`

const Plant = () => {
  return (
    <PlantWrapper>
        <PlantTopLeft>
            <img src={PlantImage} width={300} alt="Plant" />
        </PlantTopLeft>
        <PlantBottomRight>
            <img src={PlantImage} width={300} alt="Plant" />
        </PlantBottomRight>
    </PlantWrapper>
  )
}

export default Plant