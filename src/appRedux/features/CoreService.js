import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RepositoryApi from "../../apiCall/repository";
import { message } from "antd";
// import { expiredToken } from "./Auth";

const initialState = {
  coreData: {},
  promiseState: "null",
  coreCallDebug: {},

  coreServiceFlow: {},
};

export const CallCoreService = createAsyncThunk(
  "coreService/CallCoreService",
  async (data, { getState, dispatch }) => {
    const token = getState().auth.token;
    const {
      server,
      objectId,
      actionType,
      jsonValues,
      additionSeperator,
      type,
    } = data;
    if (token === "") {
      message.error(
        "توکن خالی است و متد در life Cycle اشتباهی فراخوانی شده است"
      );
    }

    let ReturnRedux;
    const response = await RepositoryApi.CoreServices(
      token,
      server,
      objectId,
      actionType,
      jsonValues
    );

    if (response.id === -401) {
      localStorage.removeItem("token");
      // dispatch(expiredToken());

      message.error("مجوز شما منقضی می باشد, دوباره وارد شوید ");
    }

    if (response.id > 0) {
      ReturnRedux = {
        type: type,
        entity: objectId,
        action: actionType,
        data: response.traceMessage,
        isFetching: false,
        hasError: false,
        message: response.message,
        additionSeperator,
        id: response.id,
      };
    } else {
      ReturnRedux = {
        type: type,
        entity: objectId,
        action: actionType,
        data: null,
        isFetching: false,
        hasError: true,
        message: response.message,
        additionSeperator,
        id: response.id,
      };
    }

    return ReturnRedux;
  }
);

const coreServiceSlice = createSlice({
  name: "coreService",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CallCoreService.pending, (state, action) => {
      state.promiseState = "pending";
      state.coreServiceFlow = {
        requestType: action.meta.arg.type,
        requestState: "pending",
        requestObj: action.meta.arg,
        response: null,
      };
    });
    builder.addCase(CallCoreService.fulfilled, (state, action) => {
      let finalOutput = { ...state.coreData };
      let responseObj = {
        ...{
          isFetching: action.payload.isFetching,
          hasError: action.payload.hasError,
          message: action.payload.message,
          data: action.payload.data,
        },
      };

      let actionObj = { ...finalOutput[action.payload.entity] };
      actionObj[action.payload.action] = responseObj;
      finalOutput[action.payload.entity] = actionObj;
      state.coreData = finalOutput;
      state.promiseState = "fulfilled";
      // =========== debug milad ===================
      state.coreCallDebug = {
        coreCallType: action.payload.type,
        request: { ...action.meta.arg },
        response: {
          data: action.payload.data,
          message: action.payload.message,
          id: action.payload.id,
        },
      };
      // ===================== Core Service Flow ==========================
      state.coreServiceFlow = {
        requestType: action.payload.type,
        requestState: "fulfilled",
        responseID: action.payload.id,
        info: {
          response: action.payload,
          requestObj: action.meta.arg,
        },
      };
    });
    builder.addCase(CallCoreService.rejected, (state, action) => {
      state.coreServiceFlow = {
        requestType: action.payload.type,
        requestState: "rejected",
        requestObj: action.meta.arg,
        response: action.payload,
        responseID: action.payload.id,
        error: action.error,
      };
    });
  },
});

export const coreServiceReducer = coreServiceSlice.reducer;
export const {} = coreServiceSlice.actions;
