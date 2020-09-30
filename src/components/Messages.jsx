import React from 'react';

export default function Messages({ messages }) {
  if (!messages || !messages.length) {
    return null;
  }

  return (
    <ol>
      {messages.map((message) => (
        <li key={message.id}>
          {message.content}
        </li>
      ))}
    </ol>
  );
}
