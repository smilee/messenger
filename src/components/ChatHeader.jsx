import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header({
  display: 'flex',
  padding: '8px 8px 8px 16px',
});

export default function ChatHeader({ channel }) {
  return (
    <Container>
      <img src={channel.avatar} alt="profile" />
      <p>{channel.name}</p>
    </Container>
  );
}
