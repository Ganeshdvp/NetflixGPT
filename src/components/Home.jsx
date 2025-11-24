import { useEffect } from "react";
import { Header } from "./Header";
import axios from "axios";
import { FirstContainer } from "./FirstContainer";
import { useDispatch } from "react-redux";
import {NowPlayingCategory} from '../utils/moviesSlice';
import { API_OPTIONS } from "../utils/constants";

export const Home = () => {

  const dispatch = useDispatch();

  // NowPlaying all movies fetching
  const NowPlayingData = async ()=>{
    try{
      const data = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=1`, API_OPTIONS);
      dispatch(NowPlayingCategory(data.data.results))
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
      NowPlayingData()
  },[])



  return (
    <>
      <Header/>
      <FirstContainer/>
    </>
  );
};
