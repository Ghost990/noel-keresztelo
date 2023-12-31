import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import FlagHu from '../../assets/hungary.png'
import FlagSrb from '../../assets/serbia.png'

const LanguageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 15px 0;
    position: relative;
    z-index: 5;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #7CA669;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #7CA669;
        color: #fff;
        z-index: 99;
    }

`

const FlagWrapper = styled.div`
    
`

const Text = styled.div`
    margin-left: 10px;
`

const Language = ({ currentLanguage }) => {

const handleChangeLanguage = () => {
    if (currentLanguage === 'hu') {
        localStorage.setItem('language', 'srb')
    } else {
        localStorage.setItem('language', 'hu')
    }
    window.location.reload()
}

  return (
    <div onClick={handleChangeLanguage} className='animate__animated animate__fadeInDown animate__delay-1s'>
        <LanguageWrapper> 
            <FlagWrapper>
                <img src={currentLanguage !== 'hu' ? FlagHu : FlagSrb} width={24} alt="Flag" />
            </FlagWrapper>
            <Text>
            {currentLanguage !== 'hu' ? 'Magyar' : 'Srpski'}
            </Text>
        </LanguageWrapper>
    </div>
    
  )
}

export default Language

