import { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({ onSourch }) => {
  const [text, setText] = useState("");

  const inputText = (e) => {
    setText(e.target.value);
    onSourch(text);
  };
  return (
    <input
      name="sourch"
      className="form-control search-input"
      type="text"
      placeholder="Поиск по записям"
      value={text}
      onChange={inputText}
    />
  );
};

export default SearchPanel;
