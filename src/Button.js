import React from "react";

const Button = ({
  disableEnableFunction,
  content,
  buttonAparience,
  disableClass,
}) => {
  return (
    <a
      onClick={disableEnableFunction}
      href="!#"
      className={`btn btn-${buttonAparience} btn-lg ${disableClass}`}
      tabIndex="-1"
      role="button"
      aria-disabled="true"
    >
      {content}
    </a>
  );
};

export default Button;
