import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import NoelLogo from '../../assets/noel-logo.svg'
import NoelLogoSrb from '../../assets/noel-logo-srb.svg'

const LogoWrapper = styled.div`
    @media (max-width: 768px) {
      width: 85%;
      margin: 0 auto;
      img {
        width: 100%;
        max-width: 550px;
      }
    }
`

const Logo = ({ currentLanguage }) => {
  return (
    <LogoWrapper>
        <img src={currentLanguage === 'hu' ? NoelLogo : NoelLogoSrb} width={350} alt="Noel Logo" />
    </LogoWrapper>
  )
}

export default Logo

Logo.propTypes = {
  currentLanguage: propTypes.string
  }