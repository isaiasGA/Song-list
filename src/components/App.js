import React from "react";
import "../styles.css";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

//For this project, we want to focus on having our data stored in REDUX instead of a react class component

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column ten wide">
          <SongList />
        </div>
        <div className="column ten wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
