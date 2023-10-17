import React from "react";
import "./Header.scss";
import { Search } from "../Search/Search";
import "./Button.scss";

type Props = {
  handleSearch: (value: string) => void;
  modeShow: string;
  handleChangeMode: () => void;
};
const VIEW = {
  LIST_VIEW: "LIST VIEW",
  GRID_VIEW: "GRID VIEW",
};

export const Header = ({ modeShow, handleSearch, handleChangeMode }: Props) => {
  return (
    <div className="header">
      <h1 className="header__title">Movie App</h1>
      <div className="header__search">
        <Search handleSearch={handleSearch}></Search>
      </div>
      <div>
        <button className="button-19" role="button" onClick={handleChangeMode}>
          {modeShow === VIEW.GRID_VIEW ? VIEW.GRID_VIEW : VIEW.LIST_VIEW}
        </button>
      </div>
    </div>
  );
};
