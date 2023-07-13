import * as React from "react"
import Gift from "../components/Gift/Gift"
import GlobalStyle from "../styles/globalStyles"



const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
     <Gift />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
