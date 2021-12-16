import React from "react";

function Music({ img, url, artist, name }) {
  return (
    <a href={url} target="_blank">
      <li>
        <div>
          {img["#text"] !== "" ? (
            <img src={img["#text"]} alt={name} />
          ) : (
            <div
              style={{
                width: "65px",
                height: "65px",
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            ></div>
          )}

          <h3>{name.substring(0, 34)}</h3>
        </div>
        <div>{artist.name}</div>
      </li>
    </a>
  );
}

export default Music;
