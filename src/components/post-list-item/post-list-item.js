import { useState } from "react";

import "./post-list-item.css";

const PostListItem = ({ label, important }) => {
  const [isImportant, setIsImportant] = useState(important);
  const [isLiked, setIsLiked] = useState(false);

  const onImportant = () => {
    setIsImportant(!isImportant);
    console.log(isImportant);
  };

  const onLike = () => {
    setIsLiked(!isLiked);
  };

  let classNames = "app-list-item  d-flex justify-content-between";

  return (
    <li
      className={`${isImportant ? classNames + " important" : classNames} ${
        isLiked ? classNames + " like" : classNames
      }`}
    >
      <span className="app-list-item-label" onClick={onLike}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-star btn-sm"
          onClick={onImportant}
        >
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn btn-trash btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
