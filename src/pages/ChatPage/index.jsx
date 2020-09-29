import React from 'react';

import Root from '../../layout/Root';
import Sidebar from '../../layout/Sidebar';
import Main from '../../layout/Main';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import MainHeader from './MainHeader';
import MainBody from './MainBody';

export default function ChatPage({
  messages, draft, onChangeDraft, onSend,
}) {
  return (
    <Root>
      <Sidebar>
        <SidebarHeader />
        <SidebarBody />
      </Sidebar>
      <Main>
        <MainHeader />
        <MainBody
          messages={messages}
          draft={draft}
          onChangeDraft={onChangeDraft}
          onSend={onSend}
        />
      </Main>
    </Root>
  );
}
