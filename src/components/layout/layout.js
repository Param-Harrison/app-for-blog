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
    />
    {children}
  </>
)
