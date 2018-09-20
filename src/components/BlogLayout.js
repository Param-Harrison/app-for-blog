import React from 'react'
import styled from 'styled-components'

import Layout from './layout'
import ChannelList from './ChannelList'
import TopicList from './TopicList'

// Container & Wrapper Styles
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  color: #444;
`
const Sidebar = styled.aside`
  background: #654ea3;
  color: #ffffff;
  grid-column: span 2;
`
const BlogListContainer = styled.aside`
  background: #e9e4f0;
  grid-column: span 3;
`
const BlogContainer = styled.aside`
  background: #fafafa;
  grid-column: span 7;
`
const BaseContainer = styled.section`
  padding: 0.5rem 0.75rem;
`
const Container = styled(BaseContainer)`
  display: flex;
`

const BlogLayout = ({ channels, topics, selectedChannel, children }) => (
  <Layout>
    <Wrapper>
      <Sidebar>
        <ChannelList selectedChannel={selectedChannel} channels={channels} />
      </Sidebar>
      <BlogListContainer>
        <TopicList topics={topics} />
      </BlogListContainer>
      <BlogContainer>
        <Container>{children}</Container>
      </BlogContainer>
    </Wrapper>
  </Layout>
)

export default BlogLayout
