import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import action-creator
import { savetoserver, getDatafromserver } from "../actions/todoaction";

//css
import "./Todo.scss";

import { Modal, Collapse } from "antd";
import TodoUndone from "./TodoUndone";
import TodoDone from "./TodoDone";
const { Panel } = Collapse;

function TodoList(props) {
  const [newtodo, setNewtodo] = useState("");

  const [visible, setVisible] = useState(false);
  const currentTodo = useSelector((state) => state.todoList);
  const completelist = useSelector((state) => state.completeTodo);
  const dispatch = useDispatch();

  //一開始，從database抓回資料，以下
  useEffect(() => {
    dispatch(getDatafromserver());
  }, [dispatch]);

  //從database抓回資料，以上

  //新增to do的modal
  const showModal = () => {
    setVisible(true);
  };

  const handleSubmitNewTodo = () => {
    setVisible(false);

    dispatch(savetoserver(newtodo));
    setNewtodo("");
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">ToDo List</h1>
        <button className="btn-add" onClick={showModal}>
          +
        </button>
        <Modal
          title="請輸入待辦事項"
          visible={visible}
          onOk={handleSubmitNewTodo}
          onCancel={handleCancel}
          okText="新增待辦"
        >
          <textarea
            rows="8"
            cols="60"
            value={newtodo}
            onChange={(e) => setNewtodo(e.target.value)}
            placeholder="請輸入待辦事項..."
            style={{ background: "transparent", border: "none" }}
          ></textarea>
        </Modal>

        <hr />
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel header="未完成" key="1">
            <div className="d-flex flex-wrap justify-content-around">
              {currentTodo.map((todo) => (
                <TodoUndone todo={todo} key={todo.id} />
              ))}
            </div>
          </Panel>
          <Panel header="已完成" key="2">
            <div className="d-flex flex-wrap justify-content-around">
              {completelist.map((todo) => {
                return <TodoDone key={todo.id} todo={todo} />;
              })}
            </div>
          </Panel>
        </Collapse>
      </div>
    </>
  );
}

export default TodoList;
