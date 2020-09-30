import React from 'react';

import styled from '@emotion/styled';

import ChatHeader from '../components/ChatHeader';
import Messages from '../components/Messages';
import DraftBox from '../components/DraftBox';

const Container = styled.main();

export default function Main({ channel, onChangeDraft, onSendMessage }) {
  if (!channel) {
    return null;
  }

  return (
    <Container>
      <ChatHeader channel={channel} />
      <Messages messages={channel.messages} />
      <DraftBox
        channelId={channel.id}
        draft={channel.draft}
        onChange={onChangeDraft}
        onSend={onSendMessage}
      />
    </Container>
  );
}
