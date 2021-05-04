/*
import React, { useState } from "react";
import updateLuz from "../store/luz/actions";
import { connect } from "react-redux";

const Form = ({ updateLuz }) => {
  const [luz, setLuz] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          updateLuz(!luz);
          setLuz(!luz);
        }}
      >
        {luz ? "OFF" : "ON"}
      </button>
    </div>
  );
};
export default connect(null, { updateLuz })(Form);
*/

import React, { useState } from "react";
import { connect } from "react-redux";

import { UPDATE_TEXTO, UPDATE_LUZ } from "../store/actions";

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
  };
};

const Form = (props) => {
  //const [luz, setLuz] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          console.log(props.updateLuz(props.luz === "on" ? "off" : "on"));
          //setLuz(!luz);
        }}
      >
        {props.luz === "off" ? "ON" : "OFF"}
      </button>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
