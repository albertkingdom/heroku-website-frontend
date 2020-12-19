import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Todo.module.scss";

export default function TodoDone({ todo }) {
  return (
    <Card
      key={todo.id}
      className={`${styles.todocard} m-2 position-relative col-12 col-md-5`}
    >
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>

        <Card.Text>{todo.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}
