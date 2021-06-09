import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import axios from 'axios';

import ChatNav from './ChatNav.jsx';
import MsgContainer from './MsgContainer.jsx';

const Chat = () => {
  const [state, setState] = useState({});
  useEffect(async () => {
    // check for token
    const { token } = JSON.parse(localStorage.getItem('userId'));
    const resp = await axios.get('/api/v1/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });
  return (
    <Container fluid className="my-4 h-100">
      <Row className="h-100">
        <Col xs={2} className="bg-light border pt-5">
          <div className="d-flex justify-content-between align-items-center">
            <span>Channels</span>
            <Button variant="outline-primary" size="sm">+</Button>
          </div>
          <ChatNav />
        </Col>
        <Col className="border border-start-0">
          <MsgContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
