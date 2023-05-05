import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    setText("");
    props.showAlert("Text Clear", "success");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black"
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "black"
            }}
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
          <button onClick={handleUpClick} className="btn btn-primary my-3 mx-2">
            Convert to upercase
          </button>
          <button onClick={handleLoClick} className="btn btn-primary my-3 mx-2">
            Convert to Lowercase
          </button>
          <button
            onClick={handleClearClick}
            className="btn btn-primary my-3 mx-2"
          >
            Clear text
          </button>
        </div>
        <div className="container my-3">
          <h1>Your text summary </h1>
          <p>
            word - {text.split(" ").length} and Character - {text.length}
          </p>
          <p>{0.008 * text.split(" ").length} Minutes need to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
