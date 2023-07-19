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
    z-index: 1;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #7CA669;
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
    <div onClick={handleChangeLanguage}>
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

