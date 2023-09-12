import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      cardNumber: "6104337840874620",
      year: "12",
      month: "07",
      rgb: "rgb(191, 238, 187)",
    },
    {
      cardNumber: "6204537843814620",
      year: "5",
      month: "12",
      rgb: "rgb(288, 234, 189)",
    },
  ],
};

const cardSlice = createSlice({
  name: "coreService",
  initialState,
  reducers: {
    createCard: (state, payload) => [...state.data, payload],
    updateCard: (state, payload) => {
      state.data = state.data.map((data) =>
        data.cardNumber === payload.cardNumber ? payload : data
      );
    },
    deleteCard: (state, payload) => {
      state.data = state.data.filter((data) => !data.cardNumber === payload);
    },
  },
});

export const cardReducer = cardSlice.reducer;
export const { getCard, createCard, updateCard, deleteCard } =
  cardSlice.actions;
