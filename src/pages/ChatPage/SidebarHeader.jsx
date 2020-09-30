import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 16px',
});

export default function SidebarHeader({ onAddChannel }) {
  return (
    <Container>
      <h2>Chat</h2>
      <button type="button" onClick={onAddChannel}>
        New chat
      </button>
    </Container>
  );
}
