import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Mailer = () => {
  const { register, handleSubmit, watch } = useForm();

  const sendEmail = (e, data) => {
    e.preventDefault();
    console.log(data);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_USER
      )
      .then((response) => {
        console.log(response);
        e.target.firstname.value = "";
        e.target.lastname.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
        e.target.rgpd.value = false;
      })
      .catch((err) => console.log(err));
  };
  console.log("lastname", watch("lasname"));
  return (
    <>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className=" md:container space-y-4"
      >
        <div className="mt-4 space-y-4">
          <div className="md:basis-1/2">
            <label htmlFor="lastname" className="h4">
              Votre nom&nbsp; <span className="text-red-500">*&nbsp;</span>
            </label>
            <input
              type="text"
              name="lastname"
              id="lasname"
              placeholder="Saisissez votre nom"
              {...register("lastname", { required: true })}
            />
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <div className="md:basis-1/2">
            <label htmlFor="firstname" className="h4">
              Votre prénom&nbsp; <span className="text-red-500">*&nbsp;</span>
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Saisissez votre prénom"
              {...register("firstname", { required: true })}
            />
          </div>
          <div className="mt-4 space-y-4">
            <div className="md:basis-1/2">
              <label htmlFor="email" className="h4">
                Votre courriel&nbsp;{" "}
                <span className="text-red-500">*&nbsp;</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Saisissez votre courriel"
                {...register("email", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="h4">
            Votre message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            cols=""
            rows="10"
            required
            placeholder="Saisissez votre message"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            name="rgpd"
            id="rgpd"
            {...register("rgpd", { required: true })}
          />
          <label htmlFor="rgpd">
            J'autorise ce site à conserver mes données mes données personnelles
            transmises par ce site. Aucune exploitation commerciale ne sera
            faite des données ainsi récoltées. Voir les conditions
            d\'utliisation.<span className="text-red-500">*</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-slate-500 text-white font-bold p-3 rounded-xl"
        >
          Envoyer
        </button>
      </form>
    </>
  );
};

export default Mailer;
