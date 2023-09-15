import { createSlice } from "@reduxjs/toolkit";

const guid = () => Math.floor(Math.random() * 100000000000);
const initialState = {
  data: [
    { type: 1, name: "پراید", pelak: ["123", "الف", "352", "76"], id: guid() },
    { type: 2, name: "150 هوندا", pelak: ["123", "4567"], id: guid() },
  ],
};

const violationSlice = createSlice({
  name: "violation",
  initialState,
  reducers: {
    createViolaiton: (state, { payload }) => {
      state.data = [...state.data, { ...payload }];
    },
    updateViolaiton: (state, { payload }) => {
      state.data = state.data.map((data) => {
        return data.id === payload.id ? { ...payload } : data;
      });
    },
    deleteViolaiton: (state, { payload }) => {
      state.data = state.data.filter((data) => data.name !== payload);
    },
  },
});

export const violationReducer = violationSlice.reducer;
export const { createViolaiton, deleteViolaiton, updateViolaiton } =
  violationSlice.actions;
