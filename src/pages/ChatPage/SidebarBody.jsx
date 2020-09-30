import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div();

const Button = styled.button({
  display: 'block',
  width: '100%',
  border: 0,
  background: 'transparent',
});

export default function SidebarBody({ channels, onChangeChannel }) {
  return (
    <Container>
      <ol>
        {Object.entries(channels).map(([id, channel]) => (
          <li key={id}>
            <Button
              type="button"
              onClick={() => onChangeChannel({ channelId: id })}
            >
              <img src={channel.avatar} alt="avatar" />
              {channel.name}
            </Button>
          </li>
        ))}
      </ol>
    </Container>
  );
}
