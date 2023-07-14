import React, { useEffect, useState } from "react"
import Gift from "../components/Gift/Gift"
import GlobalStyle from "../styles/globalStyles"
import styled from "styled-components"
import Logo from "../components/Logo/Logo"
import Plant from "../components/Plant/Plant"
import Text from "../components/Text/Text"
import Card from "../components/Card/Card"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
`

const LogoWrapper = styled.div`
  margin-top: 50px;
`

const GiftingWrapper = styled.div`


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
  const introText = "Légy szíves, kattints az ajándékdobozra, hogy megtekinthesd a részleteket!"


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

  return (
    <>
    <GlobalStyle />
    {isOverlayOpen && <Overlay><Card isOpen={isOpenGift} /></Overlay>}
    <Plant />
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Text text={introText} />
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
