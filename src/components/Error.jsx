function Error({ mostrar }) {
  if (!mostrar) {
    return null;
  }
  return (
    <p className="alert alert-danger mt-3">
      Por favor chequea que la información sea correcta.
    </p>
  );
}

export default Error;
