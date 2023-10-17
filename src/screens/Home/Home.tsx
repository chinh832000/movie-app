import React, { useEffect, useState } from "react";
import { movie } from "../../API";
import Tab from "../../components/TabComponent/Tab";
import { Header } from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import { IMovieItem } from "./type";
import "./Home.scss";
const TAB = {
  NOW_PLAY: "NOW_PLAY",
  TOP_RATED: "TOP_RATED",
};
const VIEW = {
  LIST_VIEW: "LIST VIEW",
  GRID_VIEW: "GRID VIEW",
};
function Home() {
  const [listNowPlay, setListNowPlay] = useState<IMovieItem[]>([]);
  const [listTopRated, setListTopRated] = useState<IMovieItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(TAB.NOW_PLAY);
  const [modeShow, setModeShow] = useState<string>(VIEW.GRID_VIEW);
  const [error, setError] = useState<any>(null);
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
    } catch (error: any) {
      setError(error);
      if (error.message === "Network Error") {
        setError(error);
      }
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
    } catch (error: any) {
      setError(error);
      if (error.message === "Network Error") {
        setError(error);
      }
      setLoading(false);
    }
  };
  const handleSearch = async (value: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await movie.queryMovie(value);
      setListNowPlay(data.results);
      setActiveTab(TAB.NOW_PLAY);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      if (error.message === "Network Error") {
        setError(error);
      }
      setLoading(false);
    }
  };
  const handleChangeTab = (activeTab: string) => {
    setActiveTab(activeTab);
  };
  const handleChangeMode = () => {
    setLoading(true);
    setTimeout(() => {
      setModeShow(modeShow === VIEW.GRID_VIEW ? VIEW.LIST_VIEW : VIEW.GRID_VIEW);
      setLoading(false);
    }, 200);
  };
  return (
    <>
      <Header handleSearch={handleSearch} modeShow={modeShow} handleChangeMode={handleChangeMode} />
      {error ? (
        <div className={error !== null ? "toast show" : ""}>Error : Fail to fetch data!</div>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <Tab
              listNowPlay={listNowPlay}
              listTopRated={listTopRated}
              activeTab={activeTab}
              handleChangeTab={handleChangeTab}
              modeShow={modeShow}
            />
          )}
        </>
      )}
    </>
  );
}

export default Home;
