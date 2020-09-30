import React from 'react';

import styled from '@emotion/styled';
import { Edit } from 'react-feather';
import colors from '../../colors';

const Container = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 16px',
  height: '56px',
});

const Heading = styled.h2({
  alignSelf: 'center',
  fontSize: '24px',
});

const Button = styled.button({
  width: '36px',
  height: '36px',
  border: 0,
  borderRadius: '50%',
  background: 'rgba(0, 0, 0, 0.04)',
  '& svg': {
    width: '20px',
    height: '20px',
    color: colors.black,
  },
});

export default function SidebarHeader({ onAddChannel }) {
  return (
    <Container>
      <Heading>Chat</Heading>
      <Button type="button" title="New chat" onClick={onAddChannel}>
        <Edit />
      </Button>
    </Container>
  );
}
