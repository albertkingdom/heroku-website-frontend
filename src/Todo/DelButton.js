import React from "react";
import { useDispatch } from "react-redux";

import styles from "./Todo.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { delDatafromserver } from "../actions/todoaction";

export default function DelButton({ id, token }) {
  const dispatch = useDispatch();

  return (
    <button
      className={styles["card-del-btn"]}
      onClick={() => {
        dispatch(delDatafromserver(id, token));
      }}
    >
      <AiOutlineDelete style={{ fontSize: "24px" }} />
      <span>刪除</span>
    </button>
  );
}
