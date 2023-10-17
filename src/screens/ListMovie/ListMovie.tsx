import React, { useEffect, useState } from "react";
import "./ListMovie.scss";
import { useNavigate } from "react-router-dom";

type Props = { data: any };

export const ListMovie = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="catalogContainer">
      {data.map((movie: any) => (
        <div
          className="item"
          key={movie.id}
          onClick={() => {
            navigate(`/detail/${movie.id}`);
          }}
        >
          <div className="item__img">
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="item__resume">{movie.overview}</div>
          </div>
          <div className="item__footer">
            <div className="item__footer__name">{movie.title}</div>
            <div className="item__footer__rating">{movie.vote_average}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
