import { useState } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../serch-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const data = [
  {
    id: 1,
    label: "Going to learn react",
    important: false,
    like: false,
  },
  {
    id: 2,
    label: "That is good.",
    important: false,
    like: false,
  },
  {
    id: 3,
    label: "I need a break...",
    important: false,
    like: false,
  },
];

const App = () => {
  const [dataInfo, setDataInfo] = useState(data);
  const [allPosts] = useState(dataInfo.length);
  const [sourchInfo, setSourchInfo] = useState("");
  const [filterInfo, setfIlterInfo] = useState("all");

  const filterPost = (items, filterInfo) => {
    if (filterInfo === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  const onFilterSelect = (name) => {
    setfIlterInfo(name);
  };

  const sourchPost = (items, sourchInfo) => {
    if (sourchInfo.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(sourchInfo) > -1;
    });
  };

  const visiblePost = filterPost(sourchPost(dataInfo, sourchInfo), filterInfo);

  const onSourch = (text) => {
    setSourchInfo(text);
    console.log(text);
  };

  const likes = dataInfo.reduce((acc, item) => {
    if (item.like === true) {
      return ++acc;
    }
    return acc;
  }, 0);

  const deleteItem = (id) => {
    const ind = dataInfo.findIndex((item) => item.id === id);

    setDataInfo([...dataInfo.slice(0, ind), ...dataInfo.slice(ind + 1)]);
  };

  let minId = 4;
  const addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: minId++,
    };
    const newDataArr = [...dataInfo, newItem];
    setDataInfo(newDataArr);
  };

  const onToggleImportant = (id) => {
    const ind = dataInfo.findIndex((item) => item.id === id);
    const item = dataInfo[ind];
    const newItem = { ...item, important: !item.important };
    setDataInfo([
      ...dataInfo.slice(0, ind),
      newItem,
      ...dataInfo.slice(ind + 1),
    ]);
  };

  const onToggleLike = (id) => {
    const ind = dataInfo.findIndex((item) => item.id === id);
    const item = dataInfo[ind];
    const newItem = { ...item, like: !item.like };
    setDataInfo([
      ...dataInfo.slice(0, ind),
      newItem,
      ...dataInfo.slice(ind + 1),
    ]);
  };

  return (
    <AppBlock>
      <AppHeader allPosts={allPosts} likes={likes} />
      <div className="search-panel d-flex">
        <SearchPanel onSourch={onSourch} />
        <PostStatusFilter filter={filterInfo} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        data={visiblePost}
        onDelete={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleLike={onToggleLike}
      />
      <PostAddForm onAdd={addItem} />
    </AppBlock>
  );
};

export default App;
