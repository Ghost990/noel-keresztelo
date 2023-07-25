import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

const Seo = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("hu")
    const titleHu = 'Noel keresztelő és születésnap'
    const titleSrb = 'Noel krštenje i rođendan'

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
          <title>{selectedLanguage === 'hu' ? titleHu : titleSrb}</title>
          <meta name="description" content={`2023. július 22.`} />
          {/* <meta name="image" content={seo.image} /> */}
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👶🏻</text></svg>"
          />
          {children}
        </>
      );
}

export default Seo

Seo.propTypes = {
    children: propTypes.node
}