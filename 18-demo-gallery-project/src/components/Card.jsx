
import React from "react";
import LazyImage from "./LazyImage";

const Card = ({ ele }) => {
  return (
    <a href={ele.url}>
      <LazyImage
        src={ele.download_url}
        alt={ele.author}
      />

      <h1 className="text-center font-bold pt-1">
        {ele.author}
      </h1>
    </a>
  );
};

export default Card;
