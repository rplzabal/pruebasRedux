import React, { useRef } from "react";
import { connect } from "react-redux";
import { UPDATE_TEXTO, UPDATE_LUZ, LOGIN } from "../store/actions";

const mapStateToProps = (state) => {
  return {
    texto: state.texto.texto,
    luz: state.luz.luz,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateTexto: (texto) => dispatch({ type: UPDATE_TEXTO, texto: texto }),
    updateLuz: (luz) => dispatch({ type: UPDATE_LUZ, luz: luz }),
    login: (username, password) =>
      dispatch({
        type: LOGIN,
        user: { username: username, password: password },
      }),
  };
};

const Form = (props, { mapStateToProps, mapDispatchToProps }) => {
  const username = useRef(null);
  const password = useRef(null);
  return (
    <div>
      <h1>Username:</h1>
      <input type="text" ref={username} />
      <h1>Password</h1>
      <input type="password" ref={password} />
      <button
        onClick={() => {
          console.log(
            props.login(username.current.value, password.current.value)
          );
        }}
      >
        Login
      </button>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
