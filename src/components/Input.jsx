import React from "react";

import "./Input.css";

const Input = ({ error, errorMessage, ...rest }) => {
  return (
    <div className="input">
      <input className={`input ${error ? "error" : ""}`} {...rest} />
      {error && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Input;
