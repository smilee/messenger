import React, { useState } from 'react';

import ChatPage from './pages/ChatPage';

export default function App() {
  const [state, setState] = useState({
    count: 0,
    draft: {
      message: '',
    },
    messages: [],
  });

  const { count, draft, messages } = state;

  function handleChangeDraft(value) {
    setState({
      ...state,
      draft: {
        ...draft,
        message: value,
      },
    });
  }

  function handleSendMessage() {
    setState({
      ...state,
      count: count + 1,
      draft: {
        ...draft,
        message: '',
      },
      messages: [
        ...messages,
        { id: count, content: draft.message },
      ],
    });
  }

  return (
    <ChatPage
      messages={messages}
      draft={draft}
      onChangeDraft={handleChangeDraft}
      onSend={handleSendMessage}
    />
  );
}
