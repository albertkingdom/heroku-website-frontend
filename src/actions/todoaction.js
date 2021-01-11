import Swal from "sweetalert2";

export const ADD = "ADD_TODOLIST";
export const DEL = "DEL_TODOLIST";
export const COMPLETE = "COMPLETE_TODOLIST";
export const EDIT = "EDIT_TODOLIST";
export const COMPLETE_EDIT = "COMPLETE_EDIT_TODOLIST";
export const INITIALCOMPLETE = "INITIAL_COMPLETE_TODOLIST";

//action creator
export const addtolist = (str, id, completed = 0, title) => {
  return {
    type: ADD,
    payload: { listname: str, id: id, completed: completed, title: title },
  };
};
export const deltodolist = (id) => {
  return { type: DEL, payload: { delItemIndex: id } };
};

export const editTolist = (id) => {
  return { type: EDIT, payload: { editItemId: id } };
};
//儲存todo to server
export const savetoserver = (todo, title, token) => {
  return async (dispatch, getState) => {
    const {
      user: { userId },
    } = getState();
    const request = new Request(
      "https://ptt-todolist-api.herokuapp.com/todo/savetodb",
      {
        method: "POST",
        body: JSON.stringify({ content: todo, title: title, userId }),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        }),
      }
    );

    const response = await fetch(request);
    const data = await response.json();

    if (data.result.affectedRows === 1) {
      const { insertId } = data.result;
      dispatch(addtolist(todo, insertId, 0, title));
    }
  };
};
//從database抓回資料
export const getDatafromserver = (token) => {
  return async (dispatch, getState) => {
    const {
      user: { userId },
    } = getState();
    const response = await fetch(
      "https://ptt-todolist-api.herokuapp.com/todo/gettodo",
      {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: token,
        }),
        body: JSON.stringify({ userId }),
      }
    );

    const data = await response.json();
    // console.log(getState());
    const {
      todo: { todoList, completeTodo },
    } = getState(); //取得目前store
    data.forEach((element) => {
      if (
        element.completed === 0 &&
        todoList.findIndex((todo) => todo.id === element.Id) < 0
      ) {
        dispatch(
          addtolist(
            element.content,
            element.Id,
            element.completed,
            element.title
          )
        );
      } else if (
        element.completed !== 0 &&
        completeTodo.findIndex((todo) => todo.id === element.Id) < 0
      ) {
        dispatch({
          type: INITIALCOMPLETE,
          payload: {
            id: element.Id,
            content: element.content,
            completed: element.completed,
            title: element.title,
          },
        });
      }
    });
  };
};
//刪除todo
export const delDatafromserver = (id, token) => {
  return async (dispatch) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      let body = { delid: id };

      const request = new Request(
        "https://ptt-todolist-api.herokuapp.com/todo/deltodo",
        {
          method: "post",
          body: JSON.stringify(body),
          headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: token,
          }),
        }
      );
      const response = await fetch(request);
      const data = await response.json();
      if (data.affectedRows === 1) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(deltodolist(id));
      }
    }
  };
};
//完成更新todo
export const updatetoserver = (id, editTodo, token) => {
  let body = { editid: id, content: editTodo };
  return async (dispatch) => {
    const response = await fetch(
      "https://ptt-todolist-api.herokuapp.com/todo/updatetodo",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json",
          authorization: token,
        }),
      }
    );

    const data = await response.json();
    if (data.affectedRows === 1) {
      dispatch({
        type: COMPLETE_EDIT,
        payload: { editItemId: id, editcontent: editTodo },
      });
    }
  };
};

//將todo設定為已完成
export const completeTodo = (id, token) => {
  return async (dispatch) => {
    let body = { completeid: id };

    const response = await fetch(
      "https://ptt-todolist-api.herokuapp.com/todo/completetodo",
      {
        method: "put",
        body: JSON.stringify(body),
        headers: new Headers({
          "Content-Type": "application/json",
          authorization: token,
        }),
      }
    );
    const data = await response.json();
    if (data.affectedRows === 1) {
      dispatch({ type: COMPLETE, payload: { id: id } });
    }
  };
};
