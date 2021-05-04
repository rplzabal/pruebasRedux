/*const initialState = { texto: "" };

const reducer = (state = initialState, action) => {
  if ((action.type = "UPDATE_TEXTO")) {
    return {
      ...state,
      texto: action.payload,
    };
  }
  return state;
};
export default reducer;
export const selectActiveWord = (state) => state.textoReducer.texto;*/

import { UPDATE_TEXTO } from "../actions";

const initialState = { texto: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXTO: // on clicking "+"
      return {
        ...state,
        texto: action.texto ? action.texto : state.texto,
      };
    default:
      return state;
  }
};

export default reducer;
