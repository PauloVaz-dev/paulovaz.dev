import React from 'react'
import '../css/styles.css'

function MyApp({ Component, pageProps }) {
  return (
      <React.Fragment>
        <Component {...pageProps} />
        <style jsx global>
            {`@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap')`}
        </style>
      </React.Fragment>

  )

}

export default MyApp
