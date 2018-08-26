import React from 'react'
import styled from 'emotion'
import FeatherIcon from 'feather-icons-react'

import Layout from '../components/layout'

// Container components
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  color: #444;
`
const Sidebar = styled.aside`
  background: #dd2c00;
  color: #ffffff;
  grid-column: span 2;
`
const BlogListContainer = styled.aside`
  background: #f1f6fb;
  grid-column: span 3;
`
const BlogContainer = styled.aside`
  background: #fafafa;
  grid-column: span 7;
`

const BaseContainer = styled.section`
  padding: 0.5rem 1rem;
`

const Container = styled(BaseContainer)`
  display: flex;
`

// Sidebar components
const RightIcon = styled(FeatherIcon)`
  margin-left: auto;
`
const ChannelList = BaseContainer.withComponent('ul')
const Channel = styled.li`
  display: flex;
  cursor: pointer;
  &:hover {
    background: #fafafa;
    color: #444;
  }
`
const LeftIcon = styled(FeatherIcon)`
  padding-right: 0.4rem;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Sidebar>
        <Container>
          <h4>Channels</h4>
        </Container>
        <ChannelList>
          <Channel>
            <LeftIcon icon="hash" size={18} />
            <div>Channels</div>
            <RightIcon icon="chevron-right" size={20} />
          </Channel>
        </ChannelList>
      </Sidebar>
      <BlogListContainer>
        <Container>Blog List</Container>
      </BlogListContainer>
      <BlogContainer>
        <Container>Blog Container</Container>
      </BlogContainer>
    </Wrapper>
  </Layout>
)

export default IndexPage
