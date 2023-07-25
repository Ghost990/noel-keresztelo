import React, { useEffect, useState } from "react"
import Gift from "../components/Gift/Gift"
import GlobalStyle from "../styles/globalStyles"
import styled from "styled-components"
import Logo from "../components/Logo/Logo"
import Plant from "../components/Plant/Plant"
import Text from "../components/Text/Text"
import Card from "../components/Card/Card"
import Language from "../components/Language/Language"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  flex-direction: column;
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
`

const LogoWrapper = styled.div`
  margin-top: 50px;
`

const GiftingWrapper = styled.div`
overflow: hidden;

`

const GiftWrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -150px;
  /* position: absolute; */
`

const CardWrapper = styled.div`
  position: absolute;
  
  top: 25%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 248, 233, 0.8);
  z-index: 2;
`



const IndexPage = () => {
  const [isOpenGift, setIsOpenGift] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const introTextHu = "Légy szíves, kattints az ajándékdobozra, hogy megtekinthesd a részleteket!"
  const introTextSrb = "Molim te klikni na poklon kutiju za dalje detalje"
  const [selectedLanguage, setSelectedLanguage] = useState("hu")


  useEffect(() => {
    if (isOpenGift) {
      document.body.style.overflow = "hidden"
      setTimeout(() => {
        setIsOverlayOpen(true)
      }, 1700);
    } else {
      document.body.style.overflow = "auto"
      setIsOverlayOpen(false)
    }
  }, [isOpenGift])

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("language")
    if (selectedLanguage && selectedLanguage === "hu") {
      setSelectedLanguage("hu")
    } else {
      setSelectedLanguage("srb")
    }

    if (!selectedLanguage) {
      localStorage.setItem("language", "hu")
    }
  }, [])


  return (
    <>
    <GlobalStyle />
    {isOverlayOpen && <Overlay><Card language={selectedLanguage} isOpen={isOpenGift} /></Overlay>}
    <Plant />
    <Wrapper>
      <Language currentLanguage={selectedLanguage} />
      <LogoWrapper>
        <Logo currentLanguage={selectedLanguage} />
      </LogoWrapper>
      <Text text={selectedLanguage === 'hu' ? introTextHu : introTextSrb} />
      <GiftingWrapper>
        <GiftWrapper>
          <Gift isOpen={setIsOpenGift} />
        </GiftWrapper>
      </GiftingWrapper>
      
    </Wrapper>
    
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
