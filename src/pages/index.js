import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

// Container components
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

// Sidebar components
const ChannelList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  height: 100vh;
  overflow: auto;
`
const Channel = styled.li`
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s linear;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &.active {
    background: linear-gradient(to right, #f12711, #f5af19);
    color: #fff;
    cursor: default;
  }
`
const LeftIcon = styled.i`
  padding-top: 0.3rem;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`
const ChannelContent = styled.span`
`

// Blog list component
const BlogHead = styled.h4`
  font-weight: normal;
  color: #444;
`
const BlogParagraph = styled.p`
  color: #888;
  padding-top: 0.2rem;
  font-size: 0.8rem;
`
const BlogList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.8rem;
  height: 100vh;
  overflow: auto;
`
const Blog = styled.li`
  padding: 1rem;
  margin: 0.3rem 0;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background: #fff;
  }
  &.active {
    background: linear-gradient(to right, #f12711, #f5af19);
    cursor: default;
    ${BlogHead} {
      color: #fff;
    }
    ${BlogParagraph} {
      color: #ededed;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Sidebar>
        <ChannelList>
          <Channel>
            <LeftIcon className="fa fa-at" />
            <ChannelContent>Profile</ChannelContent>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-terminal" />
            <ChannelContent>Development</ChannelContent>
          </Channel>
          <Channel className="active">
            <LeftIcon className="fa fa-hashtag" />
            <ChannelContent>Design</ChannelContent>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-product-hunt" />
            <ChannelContent>Product</ChannelContent>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-heartbeat" />
            <ChannelContent>Goals</ChannelContent>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-pagelines" />
            <ChannelContent>Philosophy</ChannelContent>
          </Channel>
        </ChannelList>
      </Sidebar>
      <BlogListContainer>
        <BlogList>
          <Blog>
            <BlogHead>About this website</BlogHead>
            <BlogParagraph>Blog with web app UI</BlogParagraph>
          </Blog>
          <Blog className="active">
            <BlogHead>
              My daily routine in product development
            </BlogHead>
            <BlogParagraph>Simple words about product</BlogParagraph>
          </Blog>
          <Blog>
            <BlogHead>About this website</BlogHead>
            <BlogParagraph>Blog with web app UI</BlogParagraph>
          </Blog>
          <Blog>
            <BlogHead>
              My daily routine in product development
            </BlogHead>
            <BlogParagraph>Simple words about product</BlogParagraph>
          </Blog>
          <Blog>
            <BlogHead>About this website</BlogHead>
            <BlogParagraph>Blog with web app UI</BlogParagraph>
          </Blog>
          <Blog>
            <BlogHead>
              My daily routine in product development
            </BlogHead>
            <BlogParagraph>Simple words about product</BlogParagraph>
          </Blog>
        </BlogList>
      </BlogListContainer>
      <BlogContainer>
        <Container>Blog Container</Container>
      </BlogContainer>
    </Wrapper>
  </Layout>
)

export default IndexPage
