import React, { useEffect, useState, useRef } from "react";

import Defination from "../components/Defination";

// function getSelectedText() {
//   if (window.getSelection) return window.getSelection().toString();
//   else if (document.getSelection) return document.getSelection();
//   else if (document.selection) return document.selection.createRange().text;
//   return "";
// }

function SetupDoubleClick(props) {
  const ref = useRef();
  const [Lookup, setLookup] = useState("");

  function getSelectedText() {
    if (window.getSelection) return window.getSelection().toString();
    else if (document.getSelection) return document.getSelection();
    else if (document.selection) return document.selection.createRange().text;
    return "";
  }

  function replaceSpecialCharacters(Lookup) {
    let mod= Lookup.replace(/[\.\*\?;!()\+,\[:\]<>^_`\[\]{}~\\\/\"\'=]/g, " ");
  return   mod.replace(/\s+/g, " ");
  
  }

  useEffect(() => {
    console.log("useEffect");
    document.addEventListener("mouseup", () => {
      setLookup(getSelectedText);
    }
    );
  }, []);
 const mod = replaceSpecialCharacters(Lookup);
 console.log(mod)

 useEffect(() => {
  document.addEventListener("mouseup", (e) => {
    ref.current.style.left =e.pageX -30 +'px';
    ref.current.style.top =e.pageY -45 +'px';
    ref.current.style.position ='absolute'
    
  })
});


const handleMouseUp = (e) => {
  e.stopPropagation();
  console.log('working');
};

 return mod.length !== 0 ? (
  <>
  
  <div
        ref={ref}
        id="definition_layer"
        // onMouseMove={handleMouseMove}
        // style={{ position: "absolute", cursor: "pointer" }}
        onMouseUp={handleMouseUp}
      >
        <img  alt="defination" src="/assets/definition-layer.jpg"  />
      </div>

      </>
  
  
) : null;
 

}




export default SetupDoubleClick;
