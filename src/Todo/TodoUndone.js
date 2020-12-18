import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import {
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineEdit,
  AiOutlinePushpin,
} from "react-icons/ai";
import {
  delDatafromserver,
  updatetoserver,
  completeTodo,
  editTolist,
} from "../actions/todoaction";

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
      style={{ width: "18rem" }}
      className="m-2 todocard position-relative col-12 col-md-5"
      ref={cardRef}
    >
      <span
        className="card-del-btn"
        onClick={() => {
          dispatch(delDatafromserver(todo.id));
        }}
      >
        <AiOutlineDelete style={{ fontSize: "24px" }} />
        <span>刪除</span>
      </span>
      <span
        className="card-check-btn"
        onClick={() => {
          dispatch(completeTodo(todo.id));
        }}
      >
        <AiOutlineCheck style={{ fontSize: "24px" }} />
        <span>完成</span>
      </span>
      <AiOutlinePushpin style={{ fontSize: "24px" }} />
      {/* 顏色選擇 */}
      <div className="d-flex">
        <div
          className="color-select rounded-circle"
          style={{ background: "skyblue" }}
          onClick={handleChangeBkgColor}
        ></div>
        <div
          className="color-select rounded-circle"
          style={{ background: "orange" }}
          onClick={handleChangeBkgColor}
        ></div>
        <div
          className="color-select rounded-circle"
          style={{ background: "yellow" }}
          onClick={handleChangeBkgColor}
        ></div>
      </div>
      <Card.Body>
        <Card.Title></Card.Title>
        {!todo.edit ? (
          <>
            <Card.Text>
              {todo.content}
              <span
                className="card-edit-btn"
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
          <textarea
            type="text"
            className="col-10"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            onBlur={() => {
              dispatch(updatetoserver(todo.id, editTodo));
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
}
