import React from 'react';

import styled from '@emotion/styled';

import Avatar from '../../components/Avatar';

const Container = styled.div({
  flex: 1,
  overflowY: 'auto',
  padding: '6px',
});

const Button = styled.button(({ selected }) => ({
  display: 'block',
  margin: '2px 0',
  padding: '8px',
  width: '100%',
  border: 0,
  borderRadius: '6px',
  fontSize: '16px',
  textAlign: 'left',
  background: selected ? 'rgba(0, 0, 0, 0.06)' : 'transparent',
  transition: 'background 0.04s ease-in-out',
}));

export default function SidebarBody({ channelId, channels, onChangeChannel }) {
  return (
    <Container>
      <ol>
        {Object.values(channels).sort((a, b) => b.id - a.id).map((channel) => (
          <li key={channel.id}>
            <Button
              type="button"
              selected={channel.id === channelId}
              onClick={() => onChangeChannel({ channelId: channel.id })}
            >
              <Avatar src={channel.avatar} alt="avatar" />
              {channel.name}
            </Button>
          </li>
        ))}
      </ol>
    </Container>
  );
}
