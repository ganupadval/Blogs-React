import React from "react";
import "../style.css";
import { useState, useEffect } from "react";

export default function Dictionary() {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const lookup = "view";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url + lookup)
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
  }, []);

  return (
    <div>
      <div class="dictionary">
        <h3 style={{ padding: "10px" }}>Dictionary</h3>
        <div class="container">
          <div class="result" id="result">
            {loading && <div>A moment please...</div>}
            {error && (
              <div>
                <h3 class="error">Couldn't Find The Word</h3>
              </div>
            )}
            {data &&
              data.map(({id}) => (
                <>
                  <audio id="sound" src={data[0].phonetics[0].audio}></audio>
                  <div class="word">
                    <h3>{lookup}</h3>
                    <button >
                      <i class="fas fa-volume-up"></i>
                    </button>
                  </div>
                  <div class="details">
                    <p>{data[0].meanings[0].partOfSpeech}</p>
                    <p>/{data[0].phonetic}/</p>
                  </div>
                  <p class="word-meaning">
                    {data[0].meanings[0].definitions[0].definition}
                  </p>
                  <p class="word-example">
                    {data[0].meanings[0].definitions[0].example || ""}
                  </p>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
