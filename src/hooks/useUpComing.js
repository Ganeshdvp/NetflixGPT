import { useEffect } from "react";
import { UpComingCategory } from "../utils/moviesSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";



const useUpComing = ()=>{

    const dispatch = useDispatch();


      // Up coming all movies fetching
  const upComingMovies = async ()=>{
        try{
          const upComing = await axios.get("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);
        const data = upComing.data.results;
        dispatch(UpComingCategory(data))
        
        }
        catch(err){
          console.log(err);
        }
    }

    useEffect(()=>{
        upComingMovies();
    },[])
}

export default useUpComing;