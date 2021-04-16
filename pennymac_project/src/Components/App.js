import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useLocation, Redirect } from "react-router-dom";
import { BASE_URL } from "../api";
import SearchBar from "./SearchBar";

import Movies from "./Movies";
import Movie from "./Movie";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState([""]);
  const [indMovie, setInd] = useState(false);

  useEffect(() => {
    setInd(false);
    const fetchData = async () => {
      const res = await axios.get(`${BASE_URL}/shows`);
      setMovies(res.data);
    };
    fetchData();
  }, []);

  const getMovie = async (id) => {
    setInd(true);
    const res = await axios.get(`${BASE_URL}/shows/${id}`);
    setMovie(res.data);
  };

  const updateMovies = async (input) => {
    setInd(false);
    const res = await axios.get(`${BASE_URL}/shows`);
    const filtered = res.data.filter((event) => {
      return event.name.toLowerCase().includes(input.toLowerCase());
    });
    setMovies(filtered);
    setInput(input);
    setSearch(true);
  };

  console.log(movie);

  return (
    <Router>
      <Container>
        <SearchBar input={input} onChange={updateMovies} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Movies movies={movies} />}
          />
          <Route
            path="/shows/:id"
            render={(props) => (
              <Movie {...props} getMovie={getMovie} movie={movie} />
            )}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
