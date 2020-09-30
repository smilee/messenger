import React from 'react';

import styled from '@emotion/styled';
import colors from '../colors';

import ChatHeader from '../components/ChatHeader';
import Messages from '../components/Messages';
import DraftBox from '../components/DraftBox';

const Container = styled.main({
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100% - 300px)',
  height: '100vh',
  background: colors.background,
});

export default function Main({ channel, onChangeDraft, onSendMessage }) {
  if (!channel) {
    return null;
  }

  return (
    <Container>
      <ChatHeader channel={channel} />
      <Messages
        channelId={channel.id}
        messages={channel.messages}
      />
      <DraftBox
        channelId={channel.id}
        draft={channel.draft}
        onChange={onChangeDraft}
        onSend={onSendMessage}
      />
    </Container>
  );
}
