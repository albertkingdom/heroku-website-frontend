import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "antd";
import styles from "./Todo.module.scss";
import { savetoserver } from "../actions/todoaction";

export default function NewTodo({ visible, toSetModalVisible, token }) {
  const [newtodo, setNewtodo] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmitNewTodo = () => {
    toSetModalVisible(false);

    dispatch(savetoserver(newtodo, title, token));
    setNewtodo("");
  };
  const handleCancel = () => {
    toSetModalVisible(false);
  };
  return (
    <Modal
      title="請輸入待辦事項"
      visible={visible}
      onOk={handleSubmitNewTodo}
      onCancel={handleCancel}
      okText="新增待辦"
    >
      <input
        type="text"
        placeholder="標題"
        className={styles.newTodoTitle}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="8"
        cols="60"
        value={newtodo}
        onChange={(e) => setNewtodo(e.target.value)}
        placeholder="請輸入待辦事項..."
        style={{ background: "transparent", border: "none" }}
      ></textarea>
    </Modal>
  );
}
