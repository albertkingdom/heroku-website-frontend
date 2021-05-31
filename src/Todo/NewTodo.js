import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Modal, Input, Space } from "antd";

import { savetoserver } from "../actions/todoaction";
import "antd/dist/antd.css";

const { TextArea } = Input;

export default function NewTodo({ visible, toSetModalVisible, token }) {
  const [newtodo, setNewtodo] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const imageRef = useRef(null);

  const handleUploadImg = (e) => {
    const reader = new FileReader();
    const imgfile = e.target.files[0];
    // console.log(imgfile);
    reader.readAsDataURL(imgfile);
    reader.addEventListener(
      "load",
      function () {
        setImage(reader.result);

        imageRef.current.src = reader.result;
        // console.log(reader.result);
      },
      false
    );
  };
  const dispatch = useDispatch();

  const handleSubmitNewTodo = () => {
    toSetModalVisible(false);

    dispatch(savetoserver(newtodo, title, image, token));
    setNewtodo("");
    setTitle("");
    setImage("");
  };
  const handleCancel = () => {
    toSetModalVisible(false);
    setNewtodo("");
    setTitle("");
    setImage("");
  };
  return (
    <Modal
      title="請輸入待辦事項"
      visible={visible}
      onOk={handleSubmitNewTodo}
      onCancel={handleCancel}
      okText="新增待辦"
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          placeholder="標題"
          size="large"
          // className={styles.newTodoTitle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextArea
          rows={8}
          // cols="60"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
          placeholder="請輸入待辦事項..."
        />
        {/* <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload> */}
        <input type="file" onChange={handleUploadImg} accept="image/*" />
        {image ? (
          <img src="" alt="imagetest" ref={imageRef} height="200" />
        ) : null}
      </Space>
    </Modal>
  );
}
