import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import action-creator
import { getDatafromserver } from "../actions/todoaction";

//css
import styles from "./Todo.module.scss";

import { Collapse } from "antd";
import TodoUndone from "./TodoUndone";
import TodoDone from "./TodoDone";
import NewTodo from "./NewTodo";
import Loading from "../Ptt/Loading";

const { Panel } = Collapse;

function TodoList(props) {
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
  const toSetModalVisible = (value) => {
    setVisible(value);
  };

  return (
    <>
      <div className="container">
        {/* <h1 className="text-center text-uppercase">ToDo List</h1> */}
        <button className={styles["btn-add"]} onClick={() => setVisible(true)}>
          +
        </button>

        <NewTodo visible={visible} toSetModalVisible={toSetModalVisible} />

        <hr />
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          <Panel header="未完成" key="1">
            {currentTodo.length < 1 ? (
              <Loading />
            ) : (
              <div className="row m-auto">
                {currentTodo.map((todo) => (
                  <TodoUndone todo={todo} key={todo.id} />
                ))}
              </div>
            )}
          </Panel>

          <Panel header="已完成" key="2">
            <div className="row">
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
