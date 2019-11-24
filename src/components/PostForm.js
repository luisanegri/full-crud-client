import React from 'react';
import { Button, Form, Col } from 'react-bootstrap/';

export default function PostForm(props) {
  return (
    <div>
      <Form onSubmit={props.onSubmit}>
        <Form.Label>Post:</Form.Label>
        <Form.Row>
          <Col>
            <Form.Control
              onChange={props.onChange}
              value={props.value.title}
              name="title"
              placeholder="title"
            />
          </Col>
          <Col>
            <Form.Control
              onChange={props.onChange}
              value={props.value.message}
              name="message"
              placeholder="message"
            />
          </Col>
          <Col>
            <Button type="submit">Post</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
