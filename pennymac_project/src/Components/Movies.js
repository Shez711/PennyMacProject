import React from "react";
import styled from "styled-components";

import MovieCard from "./MovieCard";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Movie = ({ movies }) => (
  <CardsWrapper>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </CardsWrapper>
);

export default Movie;
