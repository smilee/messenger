import React, { useRef, useEffect } from 'react';

import styled from '@emotion/styled';
import { Send } from 'react-feather';
import colors from '../colors';

const Form = styled.form({
  position: 'relative',
  padding: '8px',
  borderTop: '1px solid rgba(0, 0, 0. 0.1)',
  background: '#fff',
});

const Label = styled.label({
  display: 'none',
});

const Input = styled.input({
  display: 'block',
  padding: '0 36px 0 12px',
  width: '100%',
  height: '36px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  fontSize: '14px',
  background: 'rgba(0, 0, 0, 0.02)',
});

const Button = styled.button({
  position: 'absolute',
  top: '12px',
  right: '12px',
  width: '28px',
  height: '28px',
  border: '1px solid rgba(0, 0, 0, 0.04)',
  borderRadius: '50%',
  background: colors.yellow,
  overflow: 'hidden',
  '& svg': {
    margin: '4px 0 0 -2px',
    width: '16px',
    height: '16px',
  },
});

export default function DraftBox({
  channelId, draft, onChange, onSend,
}) {
  const refInput = useRef(null);

  useEffect(() => {
    if (!refInput.current) {
      return;
    }

    refInput.current.focus();
  }, [channelId]);

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
      <Label htmlFor="input-new-message">
        Draft
      </Label>
      <Input
        ref={refInput}
        id="input-new-message"
        type="text"
        placeholder="Aa"
        value={draft.message}
        autoComplete="off"
        onChange={handleChange}
      />
      <Button type="submit" title="Send">
        <Send />
      </Button>
    </Form>
  );
}
