import AppHeader from "../app-header";
import SearchPanel from "../serch-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

//import "./app.css";

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const data = [
  {
    label: "Going to learn react",
    important: false,
  },
  {
    label: "That is good.",
    important: false,
  },
  {
    label: "I need a break...",
    important: false,
  },
];

const App = () => {
  return (
    <AppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList data={data} />
      <PostAddForm />
    </AppBlock>
  );
};

export default App;
