import { useEffect } from "react";
import { PopularCategory } from "../utils/moviesSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";



const usePopular = ()=>{

    const dispatch = useDispatch();
    const popularData = useSelector(store=> store.nowPlaying?.popularMoviesState);

    // popular all movies fetching
  const popularMovies = async ()=>{
        try{
          const popular = await axios.get("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
        const data = popular.data.results;
        dispatch(PopularCategory(data))
        
        }
        catch(err){
          console.log(err);
        }
    }

    useEffect(()=>{
        if(!popularData || popularData.length === 0){
          popularMovies();
        }
    },[])

    return popularMovies;
}

export default usePopular;