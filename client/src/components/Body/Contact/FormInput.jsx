import React from "react";

const FormInput = ({datas}) => {
  return (
    <>
    
      <label htmlFor={datas.name} className="h4">
        {datas.imputLabel} <span className="text-red-500">*</span>
      </label>
      <input
        className=""
        type={datas.type}
        name={datas.name}
        id={datas.name}
        required
        placeholder={datas.placeholder}
      />
    </>
  );
};

export default FormInput;
