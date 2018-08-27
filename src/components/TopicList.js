import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Topic from './Topic'

const Topics = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.8rem;
  height: 100vh;
  overflow: auto;
`

const TopicList = ({ topics }) => (
  <Topics>
    {topics.map((topic, index) => (
      <Topic key={`topic-${index}`} {...topic} />
    ))}
  </Topics>
)

TopicList.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
}

export default TopicList
