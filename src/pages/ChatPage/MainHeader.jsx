import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header({
  display: 'flex',
  padding: '8px 8px 8px 16px',
});

export default function MainHeader() {
  return (
    <Container>
      <img src="https://via.placeholder.com/40.png" alt="profile" />
      <p>Name</p>
    </Container>
  );
}
