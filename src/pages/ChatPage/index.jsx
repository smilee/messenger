import React from 'react';

import Root from '../../layout/Root';
import Sidebar from '../../layout/Sidebar';
import Main from '../../layout/Main';

import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';

export default function ChatPage({
  channels, onAddChannel, onChangeChannel,
  channel, onChangeDraft, onSendMessage,
}) {
  return (
    <Root>
      <Sidebar>
        <SidebarHeader onAddChannel={onAddChannel} />
        <SidebarBody
          channels={channels}
          onChangeChannel={onChangeChannel}
        />
      </Sidebar>
      <Main
        channel={channel}
        onChangeDraft={onChangeDraft}
        onSendMessage={onSendMessage}
      />
    </Root>
  );
}
