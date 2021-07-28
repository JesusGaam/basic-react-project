import React, { useState, useEffect } from "react";

const Hijo = (props) => {
  const { estado, emit } = props;

  useEffect(() => {
    console.log(estado == 10 ? "gray" : "pink");
    document.body.style.backgroundColor = estado == 10 ? "gray" : "pink";
  }, [props]);

  return (
    <>
      <h1> Hola soy el hijo</h1>
      {
        estado == 10 ? (
          <>
            <h2>Estoy despierto</h2>
            <button onClick={() => emit(20)}>Me voy a dormir</button>
          </>

        ) : (
          <>
            <h2>Estoy dormido</h2>
            <button onClick={() => emit(10)}>Me voy a levantar</button>
          </>

        )
      }
    </>
  );
};

const Padre = () => {
  const [estado, setEstado] = useState(10);

  const emitFunction = (valor) => {
    console.log("Valor del emit", valor);
    setEstado(valor)
  }

  return (
    <>
      <h1> Hola Mundo! </h1>
      {estado}
      <Hijo estado={estado} emit={emitFunction} />

    </>
  );
};

export default Padre;