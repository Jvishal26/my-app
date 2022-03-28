import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here bro...");
  const handleUpClick = () => { setText(text.toUpperCase())};
  const handleOnChange = (event) => { setText(event.target.value); };
  const handleClearClick = () => { setText(''); }
  const handleRemoveSpace = () => { 
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  };
  const handleCamelCase = () => {
    let newText = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    setText(newText)
  }
  return (
    <>
    <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary " onClick={handleClearClick}>
          Clear all Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleRemoveSpace}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCamelCase}>
          Convert To Camel Case
        </button>
      </div>
    </div>
    <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
      <h1>Your text summary</h1>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.08 * text.split(' ').filter((a) => { return (a !== "")}).length} minutes of read</p>
    </div>
    <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
      <h2 className="my-3">Preview</h2>
      <p className={`my-3`}>{text}</p>
    </div>
    </>
  );
}
