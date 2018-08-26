import React from 'react'
import Helmet from 'react-helmet'

import './layout.css'

export default ({ children, data }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Web app for a Website!' },
        {
          name: 'keywords',
          content: 'Param Harrison Blog, Gatsby, React, Styled Components',
        },
      ]}
      link={[
        {
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
          rel: 'stylesheet',
        },
      ]}
    />
    {children}
  </>
)
