import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SingleChannel = styled.li`
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
const ChannelContent = styled.span``

const Channel = ({ icon, name }) => (
  <SingleChannel>
    <LeftIcon className={`fa fa-${icon}`} />
    <ChannelContent>{name}</ChannelContent>
  </SingleChannel>
)

Channel.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Channel
