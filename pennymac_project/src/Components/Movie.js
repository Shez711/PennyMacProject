import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api";
import SeasonCard from "./SeasonCard";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Movie = ({ movie, getMovie, match }) => {
  useEffect(() => {
    getMovie(match.params.id);
    // eslint-disable-next-line
  }, []);
  const [seasons, setSeasons] = useState([]);
  const {
    name,
    summary,
    image,
    rating,
    genres,
    language,
    runtime,
    premiered,
  } = movie;
  const getSeasons = async (id) => {
    const res = await axios.get(`${BASE_URL}/shows/${id}/seasons`);
    setSeasons(res.data);
    console.log(seasons);
  };
  let history = useHistory();

  getSeasons(match.params.id);
  return (
    <div>
      <h1>{name}</h1>
      {image != null && <img src={image.medium} alt={name} />}
      {/* <img src={image} alt={name} /> */}
      <div>{summary}</div>
      {genres != null && (
        <ul>
          {genres.map((genre) => (
            <li>{genre}</li>
          ))}
        </ul>
      )}
      <h3>Premiered</h3>
      <p>{premiered}</p>
      <p>{language}</p>
      <h2>Seasons</h2>
      <CardsWrapper>
        {seasons.map((season) => (
          <SeasonCard key={season.id} season={season} />
        ))}
      </CardsWrapper>
    </div>
  );
};

export default Movie;
