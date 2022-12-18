import React, { useRef , useEffect } from "react";

export default function Defination(props) {
  const ref = useRef();

  
   
  

  const handleMouseMove = (e) => {
    ref.current.style.left ="30px";
    ref.current.style.top ="40px";

  }
  // useEffect(() => {
    
  //   console.log(diamentions);
    
  // }, [])
  
  const handleMouseUp = (e) => {
    e.stopPropagation();
    console.log('working');
  };

 

  return (
    <div>
      <div
        ref={ref}
        id={props.id}
        onMouseMove={handleMouseMove}
        style={props.style}
        onMouseUp={handleMouseUp}
      >
        <img  alt="defination" src={props.img}  />
      </div>
    </div>
  );
}
