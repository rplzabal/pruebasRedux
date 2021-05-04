/*import React, { useRef } from "react";
import updateTexto from "../store/texto/actions";
import { connect } from "react-redux";

const Form = ({ updateTexto }) => {
  const texto = useRef(null);
  return (
    <div>
      <input
        type="text"
        ref={texto}
        onChange={() => {
          updateTexto(texto.current.value);
        }}
      />
    </div>
  );
};
export default connect(null, { updateTexto })(Form);*/
import React, { useRef } from "react";
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

const Form = (props, { mapStateToProps, mapDispatchToProps }) => {
  const texto = useRef(null);
  return (
    <div>
      <input
        type="text"
        ref={texto}
        onChange={() => {
          console.log(props.updateTexto(texto.current.value));
          //this.props.updateTexto(texto.current.value);
        }}
      />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
