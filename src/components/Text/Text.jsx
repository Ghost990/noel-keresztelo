import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const TextWrapper = styled.div`
    font-size: 1.325rem;
    font-family: 'Courgette', cursive;
    padding: 15px 0;
    max-width: 800px;
    text-align: center;
    margin-top: 30px;
    @media (max-width: 768px) {
        width: 80%;
        padding: 30px;
    }
`

const Text = ({text}) => {
  return (
    <TextWrapper className='animate__animated animate__fadeInUp animate__delay-1s'>{text}</TextWrapper>
  )
}

export default Text

Text.propTypes = {
    text: propTypes.string
}