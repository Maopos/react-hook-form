import React from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="nombre">Nombre: </label>
      <input
        id="nombre"
        {...register("nombre", {
          required: { value: true, message: "El campo es requerido..." },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Tu nombre no puede tener caractéres especiales...",
          },
        })}
      />
      <br />
      {errors.nombre && <span>{errors.nombre.message}</span>}
      <br />
      <label htmlFor="apellido">Apellido: </label>
      <input
        id="apellido"
        {...register("apellido", {
          required: { value: true, message: "El campo es requerido..." },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Tu apellido no puede tener caractéres especiales...",
          },
        })}
      />
      <br />
      {errors.apellido && <span>{errors.apellido.message}</span>}
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        {...register("email", {
          required: { value: true, message: "Escribe tu correo..." },
          pattern: {
            value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            message: "Escribe un correo válido...",
          },
        })}
      />
      <br />
      {errors.email && <span>{errors.email.message}</span>}
      <br />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        {...register("password", {
          required: { value: true, message: "Ingresa tu password..." },
          minLength: {
            value: 4,
            message: "El password debe tener minimo 4 caracteres...",
          },
        })}
      />
      <br />
      {errors.password && <span>{errors.password.message}</span>}
      <br />

      <input type="submit" />
    </form>
  );
};

export default Formulario;
