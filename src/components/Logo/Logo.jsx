import React from 'react'
import styled from 'styled-components'
import NoelLogo from '../../assets/noel-logo.svg'

const LogoWrapper = styled.div`
    
`

const Logo = () => {
  return (
    <LogoWrapper>
        <img src={NoelLogo} width={350} alt="Noel Logo" />
    </LogoWrapper>
  )
}

export default Logo