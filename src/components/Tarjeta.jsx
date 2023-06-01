function Card({ estado, mostrar }) {
  if (!mostrar) {
    return null;
  }

  return (
    <figure className="text-center mt-4">
      <blockquote>
        <p>
          El libro <strong>{estado.titulo}</strong> ha sido ingresado
          exitosamente.
        </p>
      </blockquote>
      <figcaption>
        {estado.autor}, <cite>{estado.editorial}</cite>
      </figcaption>
    </figure>
  );
}

export default Card;
