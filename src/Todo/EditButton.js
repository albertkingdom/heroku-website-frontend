import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Todo.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { editTolist } from "../actions/todoaction";

export default function EditButton({ id, content, setEditTodo }) {
  const dispatch = useDispatch();

  return (
    <button
      className={styles["card-edit-btn"]}
      onClick={() => {
        dispatch(editTolist(id));
        setEditTodo(content);
      }}
    >
      <AiOutlineEdit style={{ fontSize: "24px" }} />
    </button>
  );
}
