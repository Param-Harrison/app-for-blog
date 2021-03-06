import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Channel from './Channel'

const Channels = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  height: 100vh;
  overflow: auto;
`

const ChannelList = ({ channels, selectedChannel }) => (
  <Channels>
    {channels.map((channel, index) => (
      <Channel
        key={`channel-${index}`}
        {...channel}
        isActive={channel.name === selectedChannel}
      />
    ))}
  </Channels>
)

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedChannel: PropTypes.string.isRequired,
}

export default ChannelList
