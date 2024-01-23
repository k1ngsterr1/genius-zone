import { createSlice } from "@reduxjs/toolkit";

const modalImage = createSlice({
  name: "show_modal_image",
  initialState: {
    isShown: false,
  },
  reducers: {
    turnOnModal: (state) => {
      state.isShown = true;
    },
    turnOffModal: (state) => {
      state.isShown = false;
    },
  },
});

export const { turnOnModal, turnOffModal } = modalImage.actions;
export default modalImage.reducer;
