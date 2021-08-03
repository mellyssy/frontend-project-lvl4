import React from 'react';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';

import Cat404 from '../../assets/404.jpg';

const NotFound = () => (
  <Container className="mt-4">
    <Row className="justify-content-md-center pt-2">
      <Col xs lg={6}>
        <Row className="justify-content-md-center mb-3">
          <Col className="text-center">Oops! The page you&#39;re looking for doesn&#39;t exist. Take a cat with you:</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Image src={Cat404} fluid rounded />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
