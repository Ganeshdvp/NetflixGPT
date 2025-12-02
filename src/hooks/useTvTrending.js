import { useEffect } from "react";
import { TrendingTvCategory } from "../utils/tvSeriesSlice";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";



const useTvTrending = ()=>{

    const dispatch = useDispatch();
    const tvData = useSelector(store=> store.tvSeries?.trendingTvState);


       // tv trending
       const tvTrending = async ()=>{
         try{
           const trending = await axios.get("https://api.themoviedb.org/3/trending/tv/week?language=en-US", API_OPTIONS);
           const data = trending?.data?.results;
           dispatch(TrendingTvCategory(data));
         }
          catch(err){
             console.log(err);
           }
       }

    useEffect(()=>{
        if(!tvData || tvData.length === 0){
          tvTrending();
        }
    },[])

    return tvTrending();
}

export default useTvTrending;