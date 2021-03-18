import React from "react";
import "./Card.css";

const Card = ({ clipboardCopyFunc, year, name, color, pantoneValue }) => {
  return (
    <div
      className="card"
      onClick={clipboardCopyFunc}
      style={{ background: color }}
    >
      <p className="user-select-none">{year}</p>
      <p className="text-center user-select-none">{name}</p>
      <p className="text-center user-select-none">{color}</p>
      <p className="text-end user-select-none">{pantoneValue}</p>
    </div>
  );
};

export default Card;
