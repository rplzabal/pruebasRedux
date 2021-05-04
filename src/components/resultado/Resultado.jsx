import React, { useRef } from "react";
import { selectActiveWord } from "../store/texto/reducer";
import { getBombilla } from "../store/luz/reducer";
import { connect } from "react-redux";
import { createStore } from "redux";

const mapStateToProps = (state) => {
  return {
    texto: state.texto.texto,
    luz: state.luz.luz,
    user: state.user.user,
  };
};

const Texto = ({ texto, luz, user }) => {
  return (
    <>
      <div>{texto}</div>
      <div>{luz === "on" ? "Veo todo" : "No veo nada QuQ"}</div>
      <div>{user.username + "   " + user.password}</div>
    </>
  );
};

export default connect(mapStateToProps)(Texto);
