import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import InviteImageHu from '../../assets/noel-keresztelo-invite_hu.png'
import InviteImageSrb from '../../assets/noel-keresztelo-invite_hu.png'
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
        margin-top: 15vh;
        img {
            width: 100%;
        }
    }
`

const Card = ({ isOpen, language }) => {

    const LinkHu = 'https://allusion.hu/noel-keresztelo-invite_hu.pdf'
    const LinkSrb = 'https://allusion.hu/noel-keresztelo-invite_hu.pdf'

  return (
    <div className={`animate__animated animate__zoomInUp`}>
        <CardWrapper>
            <a href={language === 'hu' ? LinkHu : LinkSrb} target="_blank" rel="noopener noreferrer">
                <img src={language === 'hu' ? InviteImageHu : InviteImageSrb}  alt="Meghívó" />
            </a>
        </CardWrapper>
    </div>
  )
}

export default Card

Card.propTypes = {
    isOpen: propTypes.bool,
    language: propTypes.string
}