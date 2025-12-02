import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "",
    fullName: "",
    email: "",
    photoURL: "",
    loading: true,
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    },
    removeUser: () => {
      return {
        uid: "",
        fullName: "",
        email: "",
        photoURL: "",
        loading: false
      };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
