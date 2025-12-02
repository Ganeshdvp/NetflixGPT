import { useEffect } from "react";
import { ArrivingTodayCategory } from "../utils/tvSeriesSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";



const useArrivingTv = ()=>{

    const dispatch = useDispatch();

    const arrivingTv = useSelector(store=> store.tvSeries?.arrivingTvSeriesState)


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
        if(!arrivingTv || arrivingTv.length === 0){
          arrivingTVSeries();
        }
    },[])

    return arrivingTVSeries();
}

export default useArrivingTv;