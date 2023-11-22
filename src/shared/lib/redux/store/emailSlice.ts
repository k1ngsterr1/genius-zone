import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmailState {
  email: string;
}

const initialState: EmailState = {
  email: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    saveEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { saveEmail } = emailSlice.actions;

export default emailSlice.reducer;
