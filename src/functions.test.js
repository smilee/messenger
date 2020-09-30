import {
  addMessage,
} from './functions';

describe('addMessage', () => {
  it('returns channel that contains given message', () => {
    const channel = addMessage({
      channel: {
        messages: [],
      },
      id: 1,
      senderId: 1,
      content: 'Hello',
    });

    expect(channel.messages).toHaveLength(1);
  });
});
