import faker from 'faker';

export function createChannel({ id }) {
  const name = faker.name.findName();
  const avatar = faker.image.avatar();

  return {
    id,
    name,
    avatar,
    draft: {
      message: '',
    },
    messages: [],
  };
}

export function addMessage({
  channel, id, senderId, content,
}) {
  return {
    ...channel,
    messages: [
      ...channel.messages,
      {
        id,
        senderId,
        content,
      },
    ],
  };
}

export function addRandomMessage({ channel, id, senderId }) {
  return addMessage({
    channel,
    id,
    senderId,
    content: faker.lorem.sentence(),
  });
}

export function clearDraft(channel) {
  return {
    ...channel,
    draft: {
      ...channel.draft,
      message: '',
    },
  };
}
