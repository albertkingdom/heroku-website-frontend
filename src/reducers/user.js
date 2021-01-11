import * as userActionType from "../actions/useraction";
const user = (state = { userId: "", email: "" }, action) => {
  switch (action.type) {
    case userActionType.LOADUSERID: {
      return { userId: action.payload.userId, email: action.payload.email };
    }
    default:
      return state;
  }
};

export default user;
