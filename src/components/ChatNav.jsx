import React from 'react';
import { Nav } from 'react-bootstrap';

const ChatNav = ({ channels }) => {
  const channelEls = channels.map(({ id, name }) => (
    <Nav.Item key={id}>
      <Nav.Link href={`/${name}`}>
        {'# '}
        {name}
      </Nav.Link>
    </Nav.Item>
  ));
  return (
    <Nav variant="pills" className="flex-column mt-2" defaultActiveKey="/general">
      {channelEls}
    </Nav>
  );
};

export default ChatNav;
