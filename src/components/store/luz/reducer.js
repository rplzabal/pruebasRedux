/*const initialState = { luz: "" };

const reducer = (state = initialState, action) => {
  if ((action.type = "UPDATE_LUZ")) {
    return {
      ...state,
      luz: action.payload,
    };
  }
  return state;
};
export default reducer;
export const getBombilla = (state) => state.luz;*/
import { UPDATE_LUZ } from "../actions";

const initialState = { luz: "on" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LUZ: // on clicking "+"
      return {
        ...state,
        luz: action.luz,
      };
    default:
      return state;
  }
};

export default reducer;
