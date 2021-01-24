import "./post-status-filter.css";
import { Button } from "reactstrap";

const PostStatusFilter = ({ onFilterSelect }) => {
  const arrBtn = ["all", "like"];

  return (
    <div className="btn-group">
      <Button
        name={arrBtn[0]}
        color="info"
        onClick={() => onFilterSelect(arrBtn[0])}
      >
        All
      </Button>

      <button
        name={arrBtn[1]}
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => onFilterSelect(arrBtn[1])}
      >
        Liked
      </button>
    </div>
  );
};

export default PostStatusFilter;
