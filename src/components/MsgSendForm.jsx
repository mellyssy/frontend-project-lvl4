import React from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import Formik from 'formik';
import * as Yup from 'yup';

import SendSVG from '../../assets/send.svg';

const MsgSendForm = () => {
  const ptext = 'Your message here...';
  return (
    <Form className="mt-auto">
      <Row>
        <Col className="pr-0">
          <Form.Control
            placeholder={ptext}
            type="text"
            name="msgContent"
          />
        </Col>
        <Col xs={1} className="p-0">
          <Button type="submit" variant="outline-light">
            <img src={SendSVG} alt="send message" style={{ width: 24, height: 24 }} />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MsgSendForm;
