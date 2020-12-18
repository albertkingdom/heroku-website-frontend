import React from "react";
import { Card } from "react-bootstrap";

export default function TodoDone({ todo }) {
  return (
    <Card
      key={todo.id}
      style={{ width: "18rem" }}
      className="m-2 todocard position-relative col-12 col-md-5"
    >
      <Card.Body>
        <Card.Title></Card.Title>

        <Card.Text>{todo.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
