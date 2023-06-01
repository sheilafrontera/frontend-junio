import { useState } from "react";
import Error from "./Error";

function Form({ estado, setEstado, setMostrarTarjeta }) {
  const [mostrarError, setMostrarError] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (
            estado.titulo.length < 3 ||
            estado.autor.length < 6 ||
            estado.editorial.length === 0
          ) {
            setMostrarError(true);
            setMostrarTarjeta(false);
          } else {
            setMostrarError(false);
            setMostrarTarjeta(true);
          }
        }}
        className="p-4 rounded border shadow-sm w-25"
      >
        <label className="form-label">Titulo</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Ingresa el titulo"
          onChange={(e) => {
            setEstado({ ...estado, titulo: e.target.value });
          }}
        />
        <label className="form-label mt-3">Autor</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Ingresa el autor"
          onChange={(e) => {
            setEstado({ ...estado, autor: e.target.value });
          }}
        />
        <label className="form-label mt-3">Editorial</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Ingresa la editorial"
          onChange={(e) => {
            setEstado({ ...estado, editorial: e.target.value });
          }}
        />
        <button
          type="submit"
          className="btn btn-primary w-100 mt-4"
          disabled={
            estado.titulo === "" ||
            estado.autor === "" ||
            estado.editorial === ""
          }
        >
          Enviar
        </button>
      </form>
      <Error mostrar={mostrarError} />
    </>
  );
}

export default Form;
