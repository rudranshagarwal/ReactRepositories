import React, { useState } from "react";
import './InputModal.css'
const InputModal = ({ show, handleClose, handleSave }) => {
  const [input, setInput] = useState({
    name: "",
    type: "",
    language: "",
    size: "",
    updated: ""
  });

  const handleChange = (event) => {
    const { placeholder, value } = event.target
    const tempObject = {
      ...input,
      [placeholder]: value
    }
    setInput(tempObject);
  };

  const handleSubmit = () => {
    handleSave(input);
    setInput({
      name: "",
      type: "",
      language: "",
      size: "",
      updated: ""
    })
    handleClose();
  };
  console.log(show)
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <input
          type="text"
          value={input.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          value={input.type}
          onChange={handleChange}
          placeholder="type"
        />
        <input
          type="text"
          value={input.language}
          onChange={handleChange}
          placeholder="language"
        />
        <input
          type="text"
          value={input.size}
          onChange={handleChange}
          placeholder="size"
        />
        <input
          type="text"
          value={input.updated}
          onChange={handleChange}
          placeholder="updated"
        />
        <div>
          <button onClick={handleSubmit}>Save</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;