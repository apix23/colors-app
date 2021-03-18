import React from "react";
import "./Card.css";

const Card = ({ clipboardCopyFunc, id, year, name, color, pantoneValue }) => {
  const showHideText = (id) => {
    const toggletText = document.getElementById(`${id}`);
    toggletText.classList.toggle("visible");

    setTimeout(() => {
      toggletText.classList.toggle("visible");
    }, 1000);
  };

  return (
    <div
      className="card"
      onClick={clipboardCopyFunc}
      style={{ background: color }}
    >
      <div
        onClick={() => {
          showHideText(id);
        }}
        className="overlay"
      >
        <p className="text user-select-none">Click to copy</p>
        <p id={id} className="text user-select-none copied-text">
          Copied!
        </p>
      </div>
      <p className="user-select-none">{year}</p>
      <p className="text-center user-select-none">{name}</p>
      <p className="text-center user-select-none">{color}</p>
      <p className="text-end user-select-none">{pantoneValue}</p>
    </div>
  );
};

export default Card;
