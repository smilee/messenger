import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({

});

export default function SidebarBody() {
  return (
    <Container>
      <input type="search" placeholder="Search chat" />
      <ol>
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <a href={`#${i}`}>
              Chat
              {i}
            </a>
          </li>
        ))}
      </ol>
    </Container>
  );
}
