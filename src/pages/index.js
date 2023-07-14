import * as React from "react"
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
  
`

const LogoWrapper = styled.div`
  margin-top: 50px;
`

const GiftingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 250px;

`

const GiftWrapper = styled.div`
  position: absolute;
`

const CardWrapper = styled.div`
  position: absolute;
`



const IndexPage = () => {
  const [isOpenGift, setIsOpenGift] = React.useState(false)
  const introText = "Légy szíves, kattints az ajándékdobozra, hogy megtekinthesd a részleteket!"

  return (
    <>
    <GlobalStyle />
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
        <CardWrapper>
          {isOpenGift && <Card isOpen={isOpenGift} />}
        </CardWrapper>
      </GiftingWrapper>
    </Wrapper>
    
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
