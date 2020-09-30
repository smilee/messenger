import React from 'react';
import styled from '@emotion/styled';

import Avatar from './Avatar';

const Container = styled.header({
  padding: '8px 8px 8px 16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  background: '#fff',
});

export default function ChatHeader({ channel }) {
  return (
    <Container>
      <Avatar src={channel.avatar} alt="profile" />
      {channel.name}
    </Container>
  );
}
