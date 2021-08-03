import React, { useEffect } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels } from '../store/channelsSlice.js';

import ChatNav from './ChatNav.jsx';
import MsgContainer from './MsgContainer.jsx';
import MsgSendForm from './MsgSendForm.jsx';

import PlusIcon from '../../assets/plus.svg';

const Chat = () => {
  const dispatch = useDispatch();
  const { channels } = useSelector((state) => state);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('userId'));
    dispatch(fetchChannels(token));
  }, []);
  return (
    <Container fluid className="my-4 h-100">
      <Row className="h-100">
        <Col xs={2} className="bg-light border p-1 pt-5">
          <div className="d-flex justify-content-between align-items-center ps-2 pe-2">
            <p className="m-0">Channels</p>
            <Button variant="outline-light" size="sm" className=" p-0 lh-1">
              <img src={PlusIcon} alt="add channel" style={{ width: 24, height: 24 }} />
            </Button>
          </div>
          <ChatNav channels={channels} />
        </Col>
        <Col className="border border-start-0 p-3 d-flex flex-column">
          <MsgContainer />
          <MsgSendForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
