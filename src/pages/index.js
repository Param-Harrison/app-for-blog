import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import ChannelList from '../components/ChannelList'
import TopicList from '../components/TopicList'

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

const channelData = [
  {
    icon: 'at',
    name: 'Profile',
  },
  {
    icon: 'terminal',
    name: 'Development',
  },
  {
    icon: 'hashtag',
    name: 'Design',
  },
  {
    icon: 'product-hunt',
    name: 'Product',
  },
  {
    icon: 'heartbeat',
    name: 'Goals',
  },
  {
    icon: 'pagelines',
    name: 'Philosophy',
  },
]

const topicData = [
  {
    title: 'About this website',
    text: 'Blog with web app UI',
  },
  {
    title: 'List of all learning stuff',
  },
  {
    title: 'My daily routine in product development',
    text: 'Simple words about product',
  },
]

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Sidebar>
        <ChannelList channels={channelData} />
      </Sidebar>
      <BlogListContainer>
        <TopicList topics={topicData} />
      </BlogListContainer>
      <BlogContainer>
        <Container>Blog Container</Container>
      </BlogContainer>
    </Wrapper>
  </Layout>
)

export default IndexPage
