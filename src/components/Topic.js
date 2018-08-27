import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TopicHead = styled.h4`
  font-weight: normal;
  color: #444;
`
const TopicParagraph = styled.p`
  color: #888;
  padding-top: 0.2rem;
  font-size: 0.8rem;
`

const SingleTopic = styled.li`
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
    ${TopicHead} {
      color: #fff;
    }
    ${TopicParagraph} {
      color: #ededed;
    }
  }
`
const Topic = ({ title, text }) => (
  <SingleTopic>
    <TopicHead>{title}</TopicHead>
    {text ? <TopicParagraph>{text}</TopicParagraph> : null}
  </SingleTopic>
)

Topic.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Topic
