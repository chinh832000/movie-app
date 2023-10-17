import React, { useState, useContext } from "react";
import "./Search.scss";

type Props = { handleSearch: (value: string) => void };

export const Search = ({ handleSearch }: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (search) {
      handleSearch(search);
    }
  };

  return (
    <div>
      <form name="form" onSubmit={(e) => handleOnSubmit(e)} noValidate>
        <input
          type="text"
          name="movie"
          className="search__input"
          placeholder="Search movie ... "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
