import React, { useEffect, useState } from "react"
import Gift from "../components/Gift/Gift"
import GlobalStyle from "../styles/globalStyles"
import styled from "styled-components"
import Logo from "../components/Logo/Logo"
import Plant from "../components/Plant/Plant"
import Text from "../components/Text/Text"
import Card from "../components/Card/Card"
import Language from "../components/Language/Language"
import Seo from "../components/Seo/Seo"
import Birds from "../components/Birds/Birds"
import Sloth from "../components/Sloth/Sloth"

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
  background: rgba(255, 248, 233, 0.85);
  z-index: 2;
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    z-index: 3;
  }
`

const OverlayIcon = styled.div`
  
  svg {
    width: 50px;
    height: 50px;
    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`

const BirdsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    width: 200%;
`

const SlothWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 30%;
  height: auto;
  @media (max-width: 768px) {
    width: 50%;
    top: 5%;
    margin-left: -30px;
    z-index: 1;
  }
`



const IndexPage = () => {
  const [isOpenGift, setIsOpenGift] = useState(false)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const introTextHu = "Légy szíves, kattints az ajándékdobozra, hogy megtekinthesd a részleteket!"
  const introTextSrb = "Molim te klikni na poklon kutiju za dalje detalje"
  const [selectedLanguage, setSelectedLanguage] = useState("hu")

  const handleClose = () => {
    if(typeof window !== "undefined"){
      const url = window.location
      window.location.replace(url.origin)
    }

  }


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
    {isOverlayOpen && <Overlay><div className="close-icon animate__animated animate__fadeInRight animate__delay-1s" onClick={handleClose}><OverlayIcon>
    <svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21.32L21 3.32001" stroke="#B2A38A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 3.32001L21 21.32" stroke="#B2A38A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      </OverlayIcon></div><Card language={selectedLanguage} isOpen={isOpenGift} /></Overlay>}
    <Plant />
    <Wrapper>
      <BirdsWrapper>
        <Birds />
      </BirdsWrapper>
      <SlothWrapper>
        <Sloth />
      </SlothWrapper>
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

export const Head = () => <Seo />;
