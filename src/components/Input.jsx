import React, { forwardRef } from "react";

import "./Input.css";

const Input = forwardRef(({ error, errorMessage, ...rest }, ref) => {
  return (
    <div className="input">
      <input ref={ref} className={`input ${error ? "error" : ""}`} {...rest} />
      {error && <div className="error">{errorMessage}</div>}
    </div>
  );
});

export default Input;
