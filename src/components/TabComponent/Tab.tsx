import React, { useState } from "react";
import "./Tab.scss";
import { ListMovie } from "../../screens/ListMovie/ListMovie";

type Props = {
  listTopRated: any;
  listNowPlay: any;
  activeTab: string;
  handleChangeTab: (activeTab: string) => void;
};
const TAB = {
  NOW_PLAY: "NOW_PLAY",
  TOP_RATED: "TOP_RATED",
};

function Tab({ listTopRated, listNowPlay, activeTab, handleChangeTab }: Props) {
  const handleTab1 = () => {
    // update the state to tab1
    handleChangeTab(TAB.NOW_PLAY);
  };
  const handleTab2 = () => {
    // update the state to tab2
    handleChangeTab(TAB.TOP_RATED);
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === TAB.NOW_PLAY ? "active" : ""} onClick={handleTab1}>
          Now Playing
        </li>
        <li className={activeTab === TAB.TOP_RATED ? "active" : ""} onClick={handleTab2}>
          Top Rated
        </li>
      </ul>
      <div className="outlet">
        {activeTab === TAB.NOW_PLAY && <ListMovie data={listNowPlay} />}
        {activeTab === TAB.TOP_RATED && <ListMovie data={listTopRated} />}
      </div>
    </div>
  );
}

export default Tab;
