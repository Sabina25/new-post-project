import { useState } from "react";

import "./post-list-item.css";

const PostListItem = ({
  id,
  label,
  important,
  onDelete,
  like,
  onToggleImportant,
  onToggleLike,
}) => {
  let classNames = "app-list-item  d-flex justify-content-between";

  return (
    <li
      className={`${important ? classNames + " important" : classNames} ${
        like ? classNames + " like" : classNames
      }`}
    >
      <span className="app-list-item-label" onClick={() => onToggleLike(id)}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-star btn-sm"
          onClick={() => onToggleImportant(id)}
        >
          <i className="fa fa-star"></i>
        </button>
        <button
          type="button"
          className="btn btn-trash btn-sm"
          onClick={() => onDelete(id)}
        >
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
