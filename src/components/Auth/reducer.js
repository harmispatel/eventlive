import ACTION from "./actions";

export default function authReducer(state, action) {
  const result = action.body;
  switch (action.type) {
    case `${ACTION.LOGIN_SUCCESS}`:
      return {
        ...state,
        user: result.user,
      };

    case `${ACTION.USER_LOAD}`:
      return {
        ...state,
        user: result,
      };
    default:
      return state;
  }
}
