export const LOADUSERID = "LOADUSERID";
export const loadUserId = (userId, email) => {
  return { type: LOADUSERID, payload: { userId: userId, email } };
};
