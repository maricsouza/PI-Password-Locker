import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, parseCookies } from "nookies";

const TOKEN = "token";
const USERID = "user_id";

interface userState {
  token: string;
  userId: string;
}

const cookies = parseCookies();
console.log(cookies)

const initialState: userState = {
  token: cookies[TOKEN] ?? "",
  userId: cookies[USERID] ?? "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredencials: (
      state,
      action: PayloadAction<{ token: string; userId: string }>
    ) => {
      setCookie(null, TOKEN, action.payload.token);
      setCookie(null, USERID, action.payload.userId);

      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    clearCredentials: () => {
      return initialState;
    },
  },
});

export const { setCredencials, clearCredentials } = userSlice.actions;
export default userSlice.reducer;
