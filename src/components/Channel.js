import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

const SingleChannel = styled(Link)`
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s linear;
  color: #fff;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
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

const Channel = ({ icon, name, link }) => (
  <SingleChannel activeClassName="active" to={link}>
    <LeftIcon className={`fa fa-${icon}`} />
    <ChannelContent>{name}</ChannelContent>
  </SingleChannel>
)

Channel.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Channel
