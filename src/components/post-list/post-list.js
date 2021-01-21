import PostListItem from "../post-list-item";

import { ListGroup } from "reactstrap";

import "./post-list.css";

const PostList = ({ data }) => {
  return (
    <ListGroup className="app-list">
      {data.map(({ label, important }, i) => (
        <li key={i} className="list-group-item">
          <PostListItem label={label} important={important} />
        </li>
      ))}
    </ListGroup>
  );
};

export default PostList;
