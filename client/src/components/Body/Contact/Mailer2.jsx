import React from "react";
import { useForm } from "react-hook-form";

const Mailer2 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("lastname")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        type="text"
        name="lastname"
        id="lasname"
        placeholder="Saisissez votre nom"
        {...register("lastname", { required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Mailer2;
