import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tv series",
  initialState: {
    arrivingTvSeriesState: [],
    trendingTvState: [],
  },
  reducers: {
    ArrivingTodayCategory: (state, action) => {
      state.arrivingTvSeriesState = action.payload;
    },
    TrendingTvCategory: (state, action) => {
      state.trendingTvState = action.payload;
    },
    ResetTvSeries: () => {
      return {
        arrivingTvSeriesState: [],
        trendingTvState: [],
      };
    },
  },
});

export const { ArrivingTodayCategory, TrendingTvCategory, ResetTvSeries } =
  tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
