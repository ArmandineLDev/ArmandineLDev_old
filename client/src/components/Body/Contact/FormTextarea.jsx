import React from "react";

const FormTextarea = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="message" className="h4">
        Votre message <span className="form-label-star">*</span>
      </label>
      <textarea
        name="message"
        id="message"
        cols=""
        rows="10"
        required
        placeholder="Saisissez votre message"
      ></textarea>
    </div>
  );
};

export default FormTextarea;
