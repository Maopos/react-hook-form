import React, { useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  nombre: "",
  apellido: "",
};

const Formulario2 = () => {
  // Estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const newUser = {
      nombre,
      apellido,
    };
    console.log(newUser);

    setNombre("");
    setApellido("");
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            id="nombre"
            {...register("nombre", {
              required: { value: true, message: "Debes incluir tu nombre" },
            })}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errors.nombre && (
            <p style={{ color: "red" }}>{errors.nombre.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="apellido">Apellido: </label>
          <input
            id="apellido"
            {...register("apellido", {
              required: { value: true, message: "Debes incluir tu apellido" },
            })}
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          {errors.apellido && (
            <p style={{ color: "red" }}>{errors.apellido.message}</p>
          )}
        </div>

        <button onClick={() => reset({ defaultValues })}>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario2;
