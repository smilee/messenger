import React, { useEffect, useReducer } from 'react';

import ChatPage from './pages/ChatPage';

const MESSAGES = [
  'Hello!',
  'How are you?',
];

const initialState = {
  newId: 1,
  draft: {
    message: '',
  },
  messages: [],
};

function DEFAULT_REDUCER(state) {
  return state;
}

const reducers = {
  changeDraftMessage(state, { payload: { value } }) {
    return {
      ...state,
      draft: {
        ...state.draft,
        message: value,
      },
    };
  },
  addMessage(state, { payload: { senderId, content } }) {
    return {
      ...state,
      newId: state.newId + 1,
      messages: [
        ...state.messages,
        { id: state.newId, senderId, content },
      ],
    };
  },
  sendMessage(state, { payload: { senderId } }) {
    return {
      ...state,
      newId: state.newId + 1,
      draft: {
        ...state.draft,
        message: '',
      },
      messages: [
        ...state.messages,
        { id: state.newId, senderId, content: state.draft.message },
      ],
    };
  },
};

function reducer(state, action) {
  return (reducers[action.type] || DEFAULT_REDUCER)(state, action);
}

const {
  changeDraftMessage,
  addMessage,
  sendMessage,
} = Object.keys(reducers).reduce((acc, key) => ({
  ...acc,
  [key]: (payload) => ({ type: key, payload }),
}), {});

function initMessageGenerator({ dispatch }) {
  let index = 0;

  return setInterval(() => {
    if (index >= MESSAGES.length) {
      return;
    }

    dispatch(addMessage({ senderId: 0, content: MESSAGES[index] }));

    index += 1;
  }, 1000);
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { draft, messages } = state;

  function handleChangeDraft(value) {
    dispatch(changeDraftMessage({ value }));
  }

  function handleSendMessage() {
    dispatch(sendMessage({ senderId: 1 }));
  }

  useEffect(() => {
    const id = initMessageGenerator({ dispatch });
    return () => clearTimeout(id);
  }, []);

  return (
    <ChatPage
      messages={messages}
      draft={draft}
      onChangeDraft={handleChangeDraft}
      onSend={handleSendMessage}
    />
  );
}
