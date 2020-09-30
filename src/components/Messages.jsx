import React, { useRef, useEffect } from 'react';

import styled from '@emotion/styled';
import colors from '../colors';

const Container = styled.div({
  flex: 1,
  overflowY: 'auto',
  padding: '4px 5px',
});

const List = styled.ol({
  overflow: 'hidden',
});

const Item = styled.li(({ me }) => ({
  position: 'relative',
  clear: 'both',
  float: me ? 'right' : 'left',
  margin: '6px 12px',
  padding: '10px 12px',
  fontSize: '14px',
  background: me ? colors.yellow : '#fff',
  border: '1px solid rgba(0, 0, 0, 0.06)',
  borderRadius: me ? '12px 0 12px 12px' : '0 12px 12px 12px',
}));

function scrollDown(container, list) {
  if (container.scrollTop + 120 < list.clientHeight - container.clientHeight) {
    return;
  }

  container.scrollTo(0, list.clientHeight);
}

export default function Messages({ messages }) {
  const refContainer = useRef(null);
  const refList = useRef(null);

  useEffect(() => {
    if (!refContainer.current || !refList.current) {
      return;
    }

    scrollDown(refContainer.current, refList.current);
  }, [messages]);

  if (!messages || !messages.length) {
    return (
      <Container />
    );
  }

  return (
    <Container ref={refContainer}>
      <List ref={refList}>
        {messages.map((message) => (
          <Item
            key={message.id}
            me={message.senderId === 0}
          >
            {message.content}
          </Item>
        ))}
      </List>
    </Container>
  );
}
