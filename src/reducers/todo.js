import * as actiontype from "../actions/todoaction";

const initialState = {
  todoList: [],
  completeTodo: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.ADD: {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            content: action.payload.listname,
            edit: false,
            completed: action.payload.completed,
          },
        ],
      };
    }
    case actiontype.DEL: {
      const updatedArr = state.todoList.filter(
        (todo) => todo.id !== action.payload.delItemIndex
      );

      return {
        ...state,
        todoList: updatedArr,
      };
    }
    case actiontype.COMPLETE:
      // console.log('complete',state.completeTodo)
      const complete = state.todoList.filter(
        (item) => item.id === action.payload.id
      );

      const notcomplete = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todoList: notcomplete,
        completeTodo: [...state.completeTodo, ...complete],
      };
    case actiontype.INITIALCOMPLETE:
      const initialcomplete = [
        {
          id: action.payload.id,
          content: action.payload.content,
          edit: false,
          completed: action.payload.completed,
        },
      ];
      return {
        ...state,
        completeTodo: [...state.completeTodo, ...initialcomplete],
      };
    case actiontype.EDIT:
      const obj = state.todoList.map((todo) =>
        todo.id === action.payload.editItemId
          ? { ...todo, edit: true }
          : { ...todo, edit: false }
      );

      return {
        ...state,
        todoList: obj,
      };

    case actiontype.COMPLETE_EDIT:
      const comleteEditObj = state.todoList.map((todo) =>
        todo.id === action.payload.editItemId
          ? { ...todo, edit: false, content: action.payload.editcontent }
          : { ...todo }
      );
      return {
        ...state,
        todoList: comleteEditObj,
      };
    default:
      return state;
  }
};

export default reducer;
