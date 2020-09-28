import React from 'react';
import styled from '@emotion/styled';

const Container = styled.main({

});

export default function Main({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
