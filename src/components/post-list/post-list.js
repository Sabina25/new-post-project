import PostListItem from "../post-list-item";

import "./post-list.css";

const PostList = ({ data }) => {
  return (
    <ul className="app-list list-group">
      {data.map(({ label, important }, i) => (
        <li key={i} className="list-group-item">
          <PostListItem label={label} important={important} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
