import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "",
    fullName: "",
    email: "",
    photoURL: "",
  },
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeUser: () => {
      return {
        uid: "",
        fullName: "",
        email: "",
        photoURL: "",
      };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
