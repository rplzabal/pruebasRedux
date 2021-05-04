/*import { createStore, combineReducers } from "redux";
import textoReducer from "./texto/reducer";
import luzReduce from "./luz/reducer";

export const reducers = combineReducers({
  textoReducer,
  luzReduce,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;*/
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import textoReducer from "./texto/reducer";
import luzReducer from "./luz/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  texto: textoReducer,
  luz: luzReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
