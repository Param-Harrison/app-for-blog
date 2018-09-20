import React from 'react'
import BlogLayout from '../../components/BlogLayout'

import { channelData, topicData } from '../../data'

const IndexPage = () => (
  <BlogLayout
    selectedChannel={'profile'}
    channels={channelData}
    topics={topicData.profile}
  >
    Web app as a blog content
  </BlogLayout>
)

export default IndexPage
