import React from "react";

const InputField = ({ icon, placeholder, type }) => {
  return (
    <div className="input-field">
      <i className={icon}></i>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
