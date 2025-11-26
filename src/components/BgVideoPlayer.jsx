import axios from "axios";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { TrailerVideoPlaying } from "../utils/moviesSlice";

export const BgVideoPlayer = ({ id }) => {
  const dispatch = useDispatch();

  // fetching the trailer video through the movie id
  const videoLoading = async () => {
    const video = await axios.get(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );
    const videoArray = video.data.results;

    const filteredVideo = videoArray.filter((item) => item.type === "Trailer");
    const trailer = filteredVideo.length ? filteredVideo[0] : videoArray[0];

    dispatch(TrailerVideoPlaying(trailer));
  };

  const trailerKey = useSelector((store) => store.nowPlaying?.trailerVideo);

  useEffect(() => {
    videoLoading();
  },[]);

  return (
    <>
      <div className="max-w-screen h-full">
        <iframe
          className="max-w-full h-full aspect-video pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerKey?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&loop=1&playlist=${trailerKey?.key}`}
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
    </>
  );
};
