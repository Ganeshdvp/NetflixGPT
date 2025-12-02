import { useEffect } from "react";
import { TopRatedCategory } from "../utils/moviesSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";



const useTopRated = ()=>{

    const dispatch = useDispatch();

    const topRatedData = useSelector(store=> store.nowPlaying?.topRatedMoviesState);


   // top Rated all movies fetching
  const topRatedMovies = async ()=>{
        try{
          const topRated = await axios.get("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
        const data = topRated.data.results;
        dispatch(TopRatedCategory(data))
        
        }
        catch(err){
          console.log(err);
        }
    }

    useEffect(()=>{
        if(!topRatedData || topRatedData.length === 0){
          topRatedMovies();
        }
    },[]);

    return topRatedMovies();
}

export default useTopRated;