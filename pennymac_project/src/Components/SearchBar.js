import React from "react";
import { useHistory } from "react-router-dom";

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: "50rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  //   const ButtonStyling = {
  //     marginLeft: "51rem",
  //   };
  const containerStyling = {
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
  };
  let history = useHistory();

  return (
    <div style={containerStyling}>
      <button onClick={() => history.goBack()}>Go back</button>
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search Shows"}
        onChange={(e) => setKeyword(e.target.value)}
      ></input>
      <button onPress={(e) => setKeyword(e.target.value)}>Search</button>
    </div>
  );
};

export default SearchBar;
