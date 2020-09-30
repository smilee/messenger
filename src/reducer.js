import {
  createChannel,
  addMessage,
  addRandomMessage,
  clearDraft,
} from './functions';

export const initialState = {
  newId: 1,
  channels: {},
  channelId: null,
};

function DEFAULT_REDUCER(state) {
  return state;
}

export const reducers = {
  addRandomChannel(state) {
    const channelId = state.newId;

    return {
      ...state,
      newId: state.newId + 1,
      channels: {
        ...state.channels,
        [state.newId]: createChannel({ id: state.newId }),
      },
      channelId,
    };
  },

  changeChannel(state, { payload: { channelId } }) {
    return {
      ...state,
      channelId,
    };
  },

  changeDraftMessage(state, { payload: { channelId, value } }) {
    const channel = state.channels[channelId];

    if (!channel) {
      return state;
    }

    return {
      ...state,
      channels: {
        ...state.channels,
        [channelId]: {
          ...channel,
          draft: { ...channel.draft, message: value },
        },
      },
    };
  },

  addRandomMessage(state, { payload: { channelId } }) {
    const channel = state.channels[channelId];

    if (!channel) {
      return state;
    }

    return {
      ...state,
      newId: state.newId + 1,
      channels: {
        ...state.channels,
        [channelId]: addRandomMessage({
          channel,
          id: state.newId,
          senderId: channelId,
        }),
      },
    };
  },

  sendMessage(state, { payload: { channelId, senderId } }) {
    const channel = state.channels[channelId];

    if (!channel) {
      return state;
    }

    return {
      ...state,
      newId: state.newId + 1,
      channels: {
        ...state.channels,
        [channelId]: clearDraft(addMessage({
          channel,
          id: state.newId,
          senderId,
          content: channel.draft.message,
        })),
      },
    };
  },
};

export default function reducer(state, action) {
  return (reducers[action.type] || DEFAULT_REDUCER)(state, action);
}
