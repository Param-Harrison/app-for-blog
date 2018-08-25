import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  color: #444;
`
const Sidebar = styled.aside`
  background: #dd2c00;
  color: #ffffff;
  grid-column: span 3;
`
const BlogListContainer = styled.aside`
  background: #f1f6fb;
  grid-column: span 3;
`
const BlogContainer = styled.aside`
  background: #fafafa;
  grid-column: span 6;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Sidebar>Channels List</Sidebar>
      <BlogListContainer>Blog List</BlogListContainer>
      <BlogContainer>Blog Container</BlogContainer>
    </Wrapper>
  </Layout>
)

export default IndexPage
