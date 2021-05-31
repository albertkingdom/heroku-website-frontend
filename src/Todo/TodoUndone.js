import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import DelButton from "./DelButton";
import CompleteButton from "./CompleteButton";
import EditButton from "./EditButton";

import { Card } from "react-bootstrap";
// import { AiOutlineEdit } from "react-icons/ai";
import { updatetoserver } from "../actions/todoaction";
import styles from "./Todo.module.scss";

export default function TodoUndone({ todo, token }) {
  const [editTodo, setEditTodo] = useState("");

  const dispatch = useDispatch();
  const cardRef = useRef(null);
  //改變card底色
  const handleChangeBkgColor = (e) => {
    let colorData = e.target.style.background;

    cardRef.current.style.background = colorData;
  };
  return (
    <Card
      // style={{ width: "18rem" }}
      className={`${styles.todocard} m-1 col-12 col-md-5 `}
      ref={cardRef}
    >
      <div className="d-flex justify-content-between">
        <div className="col-5 col-md-6 text-center">
          <DelButton id={todo.id} token={token} />
          <CompleteButton id={todo.id} token={token} />
          <EditButton
            id={todo.id}
            content={todo.content}
            setEditTodo={setEditTodo}
          />
        </div>
        {/* 顏色選擇 */}
        <div className="col-5 col-md-6 text-center">
          <button
            className={`${styles["color-select"]} rounded-circle`}
            style={{ background: "skyblue" }}
            onClick={handleChangeBkgColor}
          ></button>
          <button
            className={`${styles["color-select"]} rounded-circle`}
            style={{ background: "orange" }}
            onClick={handleChangeBkgColor}
          ></button>
          <button
            className={`${styles["color-select"]} rounded-circle`}
            style={{ background: "yellow" }}
            onClick={handleChangeBkgColor}
          ></button>
        </div>
      </div>
      <Card.Body>
        {!todo.edit ? (
          <>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text className="m-3">{todo.content}</Card.Text>
          </>
        ) : (
          <>
            <Card.Title>{todo.title}</Card.Title>
            <textarea
              type="text"
              rows="6"
              className={`col-12 ${styles.editTextArea}`}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              onBlur={() => {
                dispatch(updatetoserver(todo.id, editTodo, token));
              }}
            />
          </>
        )}
      </Card.Body>
      {todo.imagebase64 ? (
        <Card.Img
          variant="bottom"
          src={todo.imagebase64}
          alt="img"
          height="200"
        />
      ) : null}
    </Card>
  );
}
