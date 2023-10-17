import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movie } from "../../API";
import "./MovieDetail.scss";
import Loading from "../../components/Loading/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMovieDetail } from "./type";

const Details = () => {
  const [data, setData] = useState<IMovieDetail>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const id = useParams().id;

  useEffect(() => {
    if (id) getdataDetail(id);
  }, [id]);

  const getdataDetail = async (id: string) => {
    setLoading(true);
    try {
      const data = await movie.getMovieDetail(id);
      setData(data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
      if (error.message === "Network Error") {
        setError(error);
      }
    }
  };

  const formatMoney = (value: number) => {
    if (value <= 500) {
      return "Not provided";
    } else {
      return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
  };

  return (
    <>
      {error ? (
        <div className={error !== null ? " toast show" : ""}>Error : Fail to fetch data!</div>
      ) : (
        <>
          {data ? (
            <>
              <article className="details-page">
                <LazyLoadImage
                  alt={`Backdrop image for ${data.title}`}
                  src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                  className="backdrop-image"
                  // use normal <img> attributes as props
                />
                <div className="info">
                  <LazyLoadImage
                    src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                    alt={`Cover Image for ${data.title}`}
                    className="cover-image"
                    // use normal <img> attributes as props
                  />
                  <div className="data-overview-section">
                    <h1 className="data-title">{data.title}</h1>
                    <div className="date-and-runtime">
                      <p>{data.release_date.slice(0, 4)}</p>
                      <p>{data.runtime} min</p>
                    </div>
                    <p>{data.tagline}</p>
                    <p>{data.overview}</p>
                  </div>
                  <div className="data-rating-section">
                    <h3>✩ {data.vote_average}/10</h3>
                    <p>BUDGET:</p>
                    <p>{formatMoney(data.budget)}</p>
                    <p>REVENUE:</p>
                    <p>{formatMoney(data.revenue)}</p>
                  </div>
                </div>
              </article>
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
};

export default Details;
