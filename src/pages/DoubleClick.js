import React, { useEffect, useState } from "react";
import def from "../components/data";
import Defination from "../components/Defination";

// function getSelectedText() {
//   if (window.getSelection) return window.getSelection().toString();
//   else if (document.getSelection) return document.getSelection();
//   else if (document.selection) return document.selection.createRange().text;
//   return "";
// }

function SetupDoubleClick(props) {

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
    });
  }, []);
 const mod = replaceSpecialCharacters(Lookup);
 console.log(mod)

 return <Defination  id={"definition_layer"} style={{
  position: "absolute",
  curser: "pointer",
}} img={"src/assets/definition-layer.gif"} />;
 

}

function defMap(item) {
 
}


export default SetupDoubleClick;
