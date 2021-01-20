import "./post-list-item";

const PostListItem = () => {
  return (
    <li className="app-list d-flex justify-content-between">
      <span className="app-list-item-label">Hello word!</span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" type="submit" className="btn-trash btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  );
};

export default PostListItem;
