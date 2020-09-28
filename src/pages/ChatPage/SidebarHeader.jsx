import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
});

export default function SidebarHeader() {
  return (
    <Container>
      <h2>Chat</h2>
      <button type="button">New chat</button>
    </Container>
  );
}
