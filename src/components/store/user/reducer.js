import { LOGIN } from "../actions";

const initialState = { user: { username: "", password: "" } };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: // on clicking "+"
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
