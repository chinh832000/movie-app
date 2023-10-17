import React from "react";
import "./Header.scss";
import { Search } from "../Search/Search";
import Button from "../Button/Button";

type Props = { handleSearch: (value: string) => void };

export const Header = ({ handleSearch }: Props) => {
  return (
    <div className="header">
      <h1 className="header__title">Movie App</h1>
      <div className="header__search">
        <Search handleSearch={handleSearch}></Search>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};
