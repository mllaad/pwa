import { createSlice } from "@reduxjs/toolkit";

const randomDate = () =>
  new Date(
    new Date(2012, 0, 1) +
      Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime())
  );

const randomNumber = () =>
  Math.floor(10000000000 + Math.random() * 90000000000);

const initialState = {
  data: [
    {
      typeName: "آب",
      typeID: 1,
      data: [
        {
          rootID: 1,
          name: "قبض آب",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
        {
          rootID: 1,
          name: "2 _ قبض آب",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "برق",
      typeID: 2,
      data: [
        {
          rootID: 2,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "تلفن ثابت",
      typeID: 3,
      data: [
        {
          rootID: 3,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "گاز",
      typeID: 4,
      data: [
        {
          rootID: 4,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "همراه او",
      typeID: 5,
      data: [
        {
          rootID: 5,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "رایتل",
      typeID: 6,
      data: [
        {
          rootID: 6,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "ایرانسل",
      typeID: 7,
      data: [
        {
          rootID: 7,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "عوارض شهرداری",
      typeID: 8,
      data: [
        {
          rootID: 8,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "لیست قبو پرداخت شده",
      typeID: 9,
      data: [
        {
          rootID: 9,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
    {
      typeName: "سایر قبوض",
      typeID: 10,
      data: [
        {
          rootID: 10,
          name: "test",
          billID: randomNumber(),
          paymentID: randomNumber(),
          amount: randomNumber(),
          currentDate: randomDate(),
          paymentDate: randomDate(),
        },
      ],
    },
  ],
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    createBill: (state, { payload }) => {
      state.data = [...state.data, payload];
    },
    updateBill: (state, { payload }) => {
      state.data = state.data.map((data) => {
        return data.cardNumber === payload.cardNumber ? payload : data;
      });
    },
    deleteBill: (state, { payload }) => {
      state.data = state.data.filter((data) => data.cardNumber !== payload);
    },
  },
});

export const billReducer = billSlice.reducer;
export const { getCard, createCard, updateCard, deleteCard } =
  billSlice.actions;
