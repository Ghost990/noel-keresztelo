import React from 'react'

const Seo = ({ children }) => {
    return (
        <>
          <title>Noel keresztelő</title>
          <meta name="description" content={`2023. julius 22.`} />
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