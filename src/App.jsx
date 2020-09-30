import React, { useEffect, useReducer } from 'react';

import ChatPage from './pages/ChatPage';

import reducer, { initialState } from './reducer';

import {
  addRandomChannel,
  changeChannel,
  changeDraftMessage,
  addRandomMessage,
  sendMessage,
} from './actions';

function initMessageGenerator({ channelId, dispatch }) {
  return setInterval(() => {
    dispatch(addRandomMessage({ channelId }));
  }, Math.random() * (5000 - 2000) + 2000);
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { channels } = state;
  const channel = channels[state.channelId];

  function handleAddChannel() {
    dispatch(addRandomChannel());
  }

  function handleChangeChannel({ channelId }) {
    dispatch(changeChannel({ channelId }));
  }

  function handleChangeDraft({ channelId, value }) {
    dispatch(changeDraftMessage({ channelId, value }));
  }

  function handleSendMessage({ channelId }) {
    dispatch(sendMessage({ channelId, senderId: 0 }));
  }

  useEffect(() => {
    if (!channel) {
      return undefined;
    }
    const id = initMessageGenerator({ channelId: channel.id, dispatch });
    return () => clearTimeout(id);
  }, [state.channelId]);

  return (
    <ChatPage
      channels={channels}
      onAddChannel={handleAddChannel}
      onChangeChannel={handleChangeChannel}
      channel={channel}
      onChangeDraft={handleChangeDraft}
      onSendMessage={handleSendMessage}
    />
  );
}
