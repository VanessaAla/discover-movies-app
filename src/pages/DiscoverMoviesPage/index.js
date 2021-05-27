import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("");

  const search = async (event) => {
    event.preventDefault();
    if (searchText === "") {
      searchState({ status: "idle" });
      return;
    }
    set_searchState({ status: "searching" });
    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=8679fb8e&s=${queryParam}`
    );

    console.log("Response!", response);
    set_searchState({ status: "Done!" });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
    </div>
  );
}
