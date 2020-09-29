import React from 'react';
import styled from '@emotion/styled';
import DraftBox from '../../components/DraftBox';

const Container = styled.div({

});

export default function MainBody({
  messages, draft, onChangeDraft, onSend,
}) {
  return (
    <Container>
      <ol>
        {messages.map((message) => (
          <li key={message.id}>
            {message.content}
          </li>
        ))}
      </ol>
      <DraftBox
        draft={draft}
        onChange={onChangeDraft}
        onSend={onSend}
      />
    </Container>
  );
}
