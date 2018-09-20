import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import "katex/dist/katex.min.css"

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    let tags
    let tagsSection
    if (post.fields.tagSlugs) {
      const tagsArray = post.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider = i < tagsArray.length - 1 && <span>{`, `}</span>
        return (
          <span key={tag}>
            <Link to={tag}>{post.frontmatter.tags[i]}</Link>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <span
          css={{
            fontStyle: `normal`,
            textAlign: `left`,
          }}
        >
          tagged {tags}
        </span>
      )
    }

    return (
      <Layout location={this.props.location}>
        <div>
          <header>
            <h1
              css={{
                color: post.frontmatter.shadow,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              css={{
                display: `block`,
              }}
            >
              {post.timeToRead} min read &middot; {tagsSection}
            </p>
          </header>

          <h2>Contents</h2>
          <div
            dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
            className="toc"
          />

          {post.htmlAst}
          <hr />
          <p
            css={{
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <Img
              alt={`Avatar of ${post.frontmatter.author.id}`}
              fixed={post.frontmatter.author.avatar.children[0].fixed}
              css={{
                borderRadius: `100%`,
                float: `left`,
                marginBottom: 0,
              }}
              Tag="span"
            />
            <span>
              <small
                css={{
                  fontWeight: `bold`,
                  textTransform: `uppercase`,
                }}
              >
                {post.frontmatter.author.id}
              </small>
              {` `}
              {post.frontmatter.author.bio}
            </span>
          </p>
        </div>
      </Layout>
    )
  }
}

export default BlogPostRoute

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      tableOfContents
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(width: 50, height: 50, quality: 75, grayscale: true) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`