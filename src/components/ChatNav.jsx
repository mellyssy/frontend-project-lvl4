import React from 'react';
import { Nav } from 'react-bootstrap';

const ChatNav = () => (
  <Nav variant="pills" className="flex-column mt-2">
    <Nav.Item>
      <Nav.Link># general</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link># random</Nav.Link>
    </Nav.Item>
  </Nav>
);

export default ChatNav;
