import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
});

export default function Root({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
