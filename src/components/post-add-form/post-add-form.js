import { useState } from "react";

import "./post-add-form.css";

const PostAddForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onValueChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        name="post"
        type="text"
        placeholder="About what are you fink?"
        className="form-control new-post-label"
        onChange={onValueChange}
        value={text}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;
