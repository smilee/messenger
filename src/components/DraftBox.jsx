import React from 'react';

import styled from '@emotion/styled';

const Form = styled.form();

export default function DraftBox({
  channelId, draft, onChange, onSend,
}) {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange({ channelId, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend({ channelId });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="input-new-message">
        Draft
      </label>
      <input
        id="input-new-message"
        type="text"
        placeholder="Aa"
        value={draft.message}
        onChange={handleChange}
      />
      <button type="submit">
        Send
      </button>
    </Form>
  );
}
