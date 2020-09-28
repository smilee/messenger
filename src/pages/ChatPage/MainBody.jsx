import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({

});

export default function MainBody() {
  return (
    <Container>
      <ol>
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            Message
            {i}
          </li>
        ))}
      </ol>
      <input type="text" placeholder="Aa" />
    </Container>
  );
}
