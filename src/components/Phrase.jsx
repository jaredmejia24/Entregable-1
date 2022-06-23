import React from "react";
import { useState } from "react";

const Phrase = ({ phrases }) => {
  const changeCard = () => {
    randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    textColor = { color: `${randomColor}` };
    backgroundColor = { background: `${randomColor}` };
    i = Math.floor(Math.random() * phrases.length + 0);
    setHtml(
      <div style={backgroundColor} className="container">
        <div className="card" style={textColor}>
          <p>{phrases[i].quote}</p>
          <div className="text-end">
            <div className="mb-1">
              <i>{phrases[i].author}</i>
            </div>
            <button
              onClick={changeCard}
              style={backgroundColor}
              className="btn"
            ></button>
          </div>
        </div>
      </div>
    );
  };

  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let textColor = { color: `${randomColor}` };
  let backgroundColor = { background: `${randomColor}` };
  let i = Math.floor(Math.random() * phrases.length + 0);
  const [html, setHtml] = useState(
    <div style={backgroundColor} className="container">
      <div className="card" style={textColor}>
        <p>{phrases[i].quote}</p>
        <div className="text-end">
          <div className="mb-1">
            <i>{phrases[i].author}</i>
          </div>
          <button
            onClick={changeCard}
            style={backgroundColor}
            className="btn"
          ></button>
        </div>
      </div>
    </div>
  );
  return <div>{html}</div>;
};

export default Phrase;
