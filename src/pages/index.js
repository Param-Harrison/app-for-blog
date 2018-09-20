import React from 'react'
import BlogLayout from '../components/BlogLayout'

import { channelData, topicData } from '../data'

const IndexPage = () => (
  <BlogLayout channels={channelData} topics={topicData.profile}>
    Content of the blog comes here
  </BlogLayout>
)

export default IndexPage
