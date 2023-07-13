import * as React from "react"
import Gift from "../components/Gift/Gift"
import GlobalStyle from "../styles/globalStyles"
import styled from "styled-components"
import Logo from "../components/Logo/Logo"
import Plant from "../components/Plant/Plant"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: auto;
  flex-direction: column;
  overflow: hidden;
`

const LogoWrapper = styled.div`
  margin-top: 100px;
`



const IndexPage = () => {
  return (
    <>
    <GlobalStyle />
    <Plant />
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Gift />
    </Wrapper>
    
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
