import React, { useEffect, useState } from "react";
import "./ListMovie.scss";
import { useNavigate } from "react-router-dom";
import { IMovieItem } from "../Home/type";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = { data: IMovieItem[]; modeShow: string };
const VIEW = {
  LIST_VIEW: "LIST VIEW",
  GRID_VIEW: "GRID VIEW",
};
export const ListMovie = ({ data, modeShow }: Props) => {
  const navigate = useNavigate();

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  useEffect(() => {
    reveal();
  }, [data]);

  window.addEventListener("scroll", reveal);
  return (
    <div className={modeShow === VIEW.GRID_VIEW ? "catalogContainerGrid" : "catalogContainerList"}>
      {data.map((movie: any) => (
        <div
          className="item reveal"
          key={movie.id}
          onClick={() => {
            navigate(`/detail/${movie.id}`);
          }}
        >
          <div className="item__img ">
            <LazyLoadImage
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              // use normal <img> attributes as props
            />
            {/* <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            /> */}
            {modeShow === VIEW.GRID_VIEW && <div className="item__resume">{movie.overview}</div>}
          </div>
          <div className="item__footer">
            <div className="item__footer__name">{movie.title}</div>
            <div className="item__footer__rating">{movie.vote_average}</div>
            {modeShow === VIEW.LIST_VIEW && <div className="item__resume">{movie.overview}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};
