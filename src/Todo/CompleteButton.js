import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Todo.module.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { completeTodo } from "../actions/todoaction";

export default function CompleteButton({ id }) {
  const dispatch = useDispatch();

  return (
    <button
      className={styles["card-check-btn"]}
      onClick={() => {
        dispatch(completeTodo(id));
      }}
    >
      <AiOutlineCheck style={{ fontSize: "24px" }} />
      <span>完成</span>
    </button>
  );
}
