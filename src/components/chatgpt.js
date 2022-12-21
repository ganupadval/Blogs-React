import React, { useEffect, useState, useRef } from "react";

export default function DictionaryLookup({ areaClass }) {
  //   const [result, setResult] = useState("");
  const maxAllowedWords = 5;
  const [lookup, setLookup] = useState("");
  //   const [sound, setSound] = useState("");
  const definitionLayer = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getSelectedText() {
    if (window.getSelection) return window.getSelection().toString();
    else if (document.getSelection) return document.getSelection();
    else if (document.selection)
      return document.selection.createRange().text;
    return "";
  }
  useEffect(() => {
    const showLayer = (e) => {
      e.preventDefault();

      setLookup(getSelectedText().replace(/[\.\*\?;!()\+,\[:\]<>^_`\[\]{}~\\\/\"\'=]/g, " ").replace(/\s+/g, " "));

      if (lookup != null && lookup.replace("/s/g", "").length > 0) {
        //disable the double-click feature if the lookup string
        //exceeds the maximum number of allowable words
        if (maxAllowedWords && lookup.split(/[ -]/).length > maxAllowedWords)
          return;

        //append the layer to the DOM only once
        if (!definitionLayer.current) {
          definitionLayer.current = document.createElement("div");
          definitionLayer.current.id = "definition_layer";
          definitionLayer.current.style.position = "absolute";
          definitionLayer.current.style.cursor = "pointer";
          definitionLayer.current.style.display = 'none'
          const img = document.createElement("img");
          img.src = "/assets/definition-layer.jpg";
          img.alt = "";
          img.title = "";
          definitionLayer.current.appendChild(img);
          document.body.appendChild(definitionLayer.current);
        }

        definitionLayer.current.addEventListener("mouseup", (e) => {
          e.stopPropagation();
          console.log(lookup)
          api(lookup);
          // openPopup(lookup, translateDictionary);
        });
        //move the layer at the cursor position
        definitionLayer.current.style.left = `${e.pageX - 30}px`;
        definitionLayer.current.style.top = `${e.pageY - 40}px`;
        definitionLayer.current.style.display = 'block';

        //open the definition popup clicking on the layer
      } else {
        if (definitionLayer.current) {
          definitionLayer.current.remove();
        }
      }
    };

    const api = (lookup) => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${lookup}`)
        .then((response) => response.json())
        .then((actualData) => {
          setData(actualData);
          console.log(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    const area = areaClass ? "." + areaClass : "body";
    document.querySelector(area).addEventListener("mouseup", showLayer);
  },[lookup]);
console.log(data)
}
