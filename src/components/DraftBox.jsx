import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({

});

export default function DraftBox({ draft, onChange, onSend }) {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <Container>
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
      <button
        type="button"
        onClick={onSend}
      >
        Send
      </button>
    </Container>
  );
}
