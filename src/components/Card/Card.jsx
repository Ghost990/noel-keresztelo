import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import InviteImage from '../../assets/meghivo.png'
import "animate.css"

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 2rem;
    position: relative;
    img {
        width: 60vw;
        height: auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    @media (max-width: 768px) {
        margin: 0;
        width: 90vw;
        margin-left: 5vw;
        margin-top: 5vh;
        img {
            width: 100%;
        }
    }
`

const Card = ({ isOpen }) => {
  return (
    <div className={`animate__animated animate__zoomInUp`}>
        <CardWrapper>
            <img src={InviteImage}  alt="Meghívó" />
        </CardWrapper>
    </div>
  )
}

export default Card

Card.propTypes = {
    isOpen: propTypes.bool
}