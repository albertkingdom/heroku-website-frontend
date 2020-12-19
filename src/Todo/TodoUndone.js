import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import DelButton from "./DelButton";
import CompleteButton from "./CompleteButton";
import { Card } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { updatetoserver, editTolist } from "../actions/todoaction";
import styles from "./Todo.module.scss";

export default function TodoUndone({ todo }) {
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
      className={`${styles.todocard} m-1 col-11  col-md-5 `}
      ref={cardRef}
    >
      <DelButton id={todo.id} />
      <CompleteButton id={todo.id} />
      {/* <AiOutlinePushpin style={{ fontSize: "24px" }} /> */}
      {/* 顏色選擇 */}
      <div className="d-flex">
        <div
          className={`${styles["color-select"]} rounded-circle`}
          style={{ background: "skyblue" }}
          onClick={handleChangeBkgColor}
        ></div>
        <div
          className={`${styles["color-select"]} rounded-circle`}
          style={{ background: "orange" }}
          onClick={handleChangeBkgColor}
        ></div>
        <div
          className={`${styles["color-select"]} rounded-circle`}
          style={{ background: "yellow" }}
          onClick={handleChangeBkgColor}
        ></div>
      </div>
      <Card.Body>
        {!todo.edit ? (
          <>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>
              {todo.content}
              <span
                className={styles["card-edit-btn"]}
                onClick={() => {
                  dispatch(editTolist(todo.id));
                  setEditTodo(todo.content);
                }}
              >
                <AiOutlineEdit />
              </span>
            </Card.Text>
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
                dispatch(updatetoserver(todo.id, editTodo));
              }}
            />
          </>
        )}
      </Card.Body>
    </Card>
  );
}
