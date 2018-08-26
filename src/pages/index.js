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
  padding: 1rem 0;
`
const Channel = styled.li`
  display: flex;
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

// Blog list component
const SingleBlogHead = styled.h4`
  font-weight: normal;
  color: #444;
`
const SingleBlogParagraph = styled.p`
  color: #888;
  padding-top: 0.2rem;
  font-size: 0.8rem;
`
const SingleBlog = styled.div`
  padding: 1rem;
  margin: 0.6rem 0.8rem;
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
    ${SingleBlogHead} {
      color: #fff;
    }
    ${SingleBlogParagraph} {
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
            <div>Profile</div>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-terminal" />
            <div>Development</div>
          </Channel>
          <Channel className="active">
            <LeftIcon className="fa fa-hashtag" />
            <div>Design</div>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-product-hunt" />
            <div>Product</div>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-heartbeat" />
            <div>Goals</div>
          </Channel>
          <Channel>
            <LeftIcon className="fa fa-pagelines" />
            <div>Philosophy</div>
          </Channel>
        </ChannelList>
      </Sidebar>
      <BlogListContainer>
        <SingleBlog>
          <SingleBlogHead>About this website</SingleBlogHead>
          <SingleBlogParagraph>Blog with web app UI</SingleBlogParagraph>
        </SingleBlog>
        <SingleBlog className="active">
          <SingleBlogHead>
            My daily routine in product development
          </SingleBlogHead>
          <SingleBlogParagraph>Simple words about product</SingleBlogParagraph>
        </SingleBlog>
        <SingleBlog>
          <SingleBlogHead>About this website</SingleBlogHead>
          <SingleBlogParagraph>Blog with web app UI</SingleBlogParagraph>
        </SingleBlog>
        <SingleBlog>
          <SingleBlogHead>
            My daily routine in product development
          </SingleBlogHead>
          <SingleBlogParagraph>Simple words about product</SingleBlogParagraph>
        </SingleBlog>
        <SingleBlog>
          <SingleBlogHead>About this website</SingleBlogHead>
          <SingleBlogParagraph>Blog with web app UI</SingleBlogParagraph>
        </SingleBlog>
        <SingleBlog>
          <SingleBlogHead>
            My daily routine in product development
          </SingleBlogHead>
          <SingleBlogParagraph>Simple words about product</SingleBlogParagraph>
        </SingleBlog>
      </BlogListContainer>
      <BlogContainer>
        <Container>Blog Container</Container>
      </BlogContainer>
    </Wrapper>
  </Layout>
)

export default IndexPage
