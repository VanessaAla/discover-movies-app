import React from "react";

export default function MovieItem(props) {
  return (
    <div>
      <p>Movie title: {props.title}</p>
      <p>Year of release: {props.year}</p>
    </div>
  );
}
