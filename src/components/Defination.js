import React from "react";

export default function Defination(props) {
  const handleMouseMove = (e) => {
    e.target.style.left = e.pageX - 30;
    e.target.style.top = e.pageY - 40;
  };

  const handleMouseUp = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <div
        id={props.id}
        // onMouseMove={handleMouseMove}
        style={props.style}
        // onMouseUp={handleMouseUp}
      >
        <img alt="defination" src={props.img} />
      </div>
    </div>
  );
}
