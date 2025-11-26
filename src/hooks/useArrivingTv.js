import { useEffect } from "react";
import { ArrivingTodayCategory } from "../utils/tvSeriesSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";



const useArrivingTv = ()=>{

    const dispatch = useDispatch();


   // TV Series fetching
    const arrivingTVSeries = async ()=>{
      try{
        const arriving = await axios.get("https://api.themoviedb.org/3/tv/airing_today", API_OPTIONS);
        const data = arriving?.data?.results;
        dispatch(ArrivingTodayCategory(data))
      }
      catch(err){
          console.log(err);
        }
    }

    useEffect(()=>{
        arrivingTVSeries();
    },[])
}

export default useArrivingTv;