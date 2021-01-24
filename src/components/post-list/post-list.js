import PostListItem from "../post-list-item";

import { ListGroup } from "reactstrap";

import "./post-list.css";

const PostList = ({ data, onDelete, onToggleLike, onToggleImportant }) => {
  return (
    <ListGroup className="app-list">
      {data.map(({ id, label, important, like }, i) => (
        <li key={i} className="list-group-item">
          <PostListItem
            id={id}
            label={label}
            important={important}
            onDelete={onDelete}
            like={like}
            onToggleImportant={onToggleImportant}
            onToggleLike={onToggleLike}
          />
        </li>
      ))}
    </ListGroup>
  );
};

export default PostList;
