import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import InviteImage from '../../assets/meghivo.png'
import "animate.css"

const CardWrapper = styled.div`
    img {
        width: 60vw;
        height: auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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