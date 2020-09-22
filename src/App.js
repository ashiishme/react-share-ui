import React from "react";
import List from "./components/List";
import Chart from "./components/Chart";
import { ShareContext } from "./hooks/useShareContext";
import useAsyncTask from "./hooks/useAsyncTask";

export default function App() {
  const response = useAsyncTask('https://ashiish.me/idart/data/shares.json');
  return (
    <div className="app container">
      <div className="share-data">
        <ul className="scrip-list">
          {response?.shares.map((item) => 
          <ShareContext.Provider value={item} key={item.id}>
            <List />
          </ShareContext.Provider>
          )}
        </ul>
      </div>
      <div className="share-visual">
        <div className="share-portfolio">
          <h3>Portfolio</h3>
          <span>Asset-wise</span>
        </div>
        <Chart/>
      </div>
    </div>
  );
}
