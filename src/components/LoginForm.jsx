/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Button, Form, Container, Row, Col,
} from 'react-bootstrap';
import axios from 'axios';
import * as Yup from 'yup';
import useAuth from '../hooks/index.jsx';

const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);
  const errMsg = 'Неверные имя пользователя или пароль';
  return (
    <Container fluid>
      <Row className="justify-content-center pt-5">
        <Col sm={6} md={4} lg={3}>
          <Formik
            initialValues={{
              username: '',
              password: '',
            }}
            validationSchema={Yup.object({
              username: Yup.string().required('Please fill out this field'),
              password: Yup.string().required('Please fill out this field'),
            })}
            validateOnChange={false}
            onSubmit={async (values) => {
              setAuthFailed(false);

              try {
                const res = await axios.post('/api/v1/login', values);
                localStorage.setItem('userId', JSON.stringify(res.data));
                auth.logIn();
                const { from } = location.state || { from: { pathname: '/' } };
                history.replace(from);
              } catch (err) {
                if (err.isAxiosError && err.response.status === 401) {
                  setAuthFailed(true);
                  return;
                }
                throw err;
              }
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupLogin" className="mb-3">
                  <Form.Label>Ваш ник</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={errors.username || authFailed}
                  />
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="mb-3">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={errors.password || authFailed}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password || errMsg}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="outline-primary" className="mb-3 w-100">Войти</Button>
              </Form>
            )}
          </Formik>
          <div className="d-flex flex-column align-items-center">
            <span className="small mb-2">Нет аккаунта?</span>
            <Link to="/signup">Регистрация</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
