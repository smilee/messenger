import React from 'react';
import styled from '@emotion/styled';

const Container = styled.aside({
  width: 300,
});

export default function Sidebar({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
