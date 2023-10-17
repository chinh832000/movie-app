import React, { useEffect, useState } from "react";
import { movie } from "../../API";
import Tab from "../../components/TabComponent/Tab";
import { Header } from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import { IMovieItem } from "./type";
import Button from "../../components/Button/Button";

const TAB = {
  NOW_PLAY: "NOW_PLAY",
  TOP_RATED: "TOP_RATED",
};
function Movie() {
  const [listNowPlay, setListNowPlay] = useState<IMovieItem[]>([]);
  const [listTopRated, setListTopRated] = useState<IMovieItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(TAB.NOW_PLAY);
  useEffect(() => {
    fetchTopRated();
    fetchNowplaying();
  }, []);
  const fetchTopRated = async () => {
    setLoading(true);
    try {
      const data = await movie.fetchMovieTopRated();
      setListTopRated(data.results);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
    // const data = await movie.fetchMovieTopRated();
  };
  const fetchNowplaying = async () => {
    setLoading(true);
    try {
      const data = await movie.fetchMovieNowPlay();
      setListNowPlay(data.results);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleSearch = async (value: string) => {
    setLoading(true);
    try {
      const data = await movie.queryMovie(value);
      setListNowPlay(data.results);
      setActiveTab(TAB.NOW_PLAY);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChangeTab = (activeTab: string) => {
    setActiveTab(activeTab);
  };
  return (
    <>
      <Header handleSearch={handleSearch} />

      <Tab
        listNowPlay={listNowPlay}
        listTopRated={listTopRated}
        activeTab={activeTab}
        handleChangeTab={handleChangeTab}
      />
      {loading && <Loading />}
    </>
  );
}

export default Movie;
