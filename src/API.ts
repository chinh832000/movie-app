const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const fetchMovieTopRated = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=aadeb985ed24afccfdfa9df377484c48&language=en-US&page=1",
    options
  );
  if (res.status !== 200) {
    const error = await res.json();
    throw error;
  }
  const data = await res.json();
  return data;
};
const fetchMovieNowPlay = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=aadeb985ed24afccfdfa9df377484c48&language=en-US&page=1",
    options
  );
  if (res.status !== 200) {
    const error = await res.json();
    throw error;
  }
  const data = await res.json();
  return data;
};
const queryMovie = async (params: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params}&api_key=aadeb985ed24afccfdfa9df377484c48`,
    options
  );
  if (res.status !== 200) {
    const error = await res.json();
    throw error;
  }
  const data = await res.json();
  return data;
};
const getMovieDetail = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=aadeb985ed24afccfdfa9df377484c48&language=en-US`,
    options
  );
  if (res.status !== 200) {
    const error = await res.json();
    throw error;
  }
  const data = await res.json();
  return data;
};

export const movie = {
  fetchMovieTopRated,
  fetchMovieNowPlay,
  queryMovie,
  getMovieDetail,
};
