import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import RepositoryApi from "../../apiCall/repository";
import jwt_decode from "jwt-decode";

const initialState = {
  token: null,
  tokenIsValid: false,
  // ============
  /*
  promiseState 
  of authThunkCall 
  from RTK
  { pending, fulfilled, rejected }
  */
  authState: "pending",
  // ============
  /* 
  this is from token by 
  useing **jwt_decode** decode 
  the userID from token 
  */
  userID: "",
  // ============
  /*
  !!!!!!!!!!!
  default password 
  or 
  custom password
  will be change in 
  menu of main page
  !!!!!!!!!!
  get from server?????
  */
  // customPassword: false,
  // ===============================
  /*
  if true app checks your password
  if false app varificate you without password
  */
  // security: false,

  // ========================
  /*
  userName is phoneNumber
  */
  userName: "",
  // ===============
  /*
  کارت های کاربر  
  */
  userCards: [],

  //  =======================
  /* 
  use this for debugging 
  value i get from this => {
    1_request type 
    2_request obj
    3_response obj
  }
  */
  thunkResponse: {},
};

// =================== چک کردن اینکه کاربر قبلا ثبت نام کرده یا نه ======================
export const alreadyRigestered = createAsyncThunk(
  "auth/alreadyRigestered",
  async (obj, {}) => {
    const response = await RepositoryApi.Auth.alreadyRigestered(obj);
    return response;
  }
);
// ================= ایجاد رمز یک بار مصرف / چک کردن رمز یکبار مصرف ====================
export const callGuestService = createAsyncThunk(
  "auth/callGuestService",
  async (data) => {
    const response = await RepositoryApi.Auth.callGuestService(data);
    if (response.id < 0) {
      message.error(response.message);
      return response;
    } else {
      return response;
    }
  }
);
// ====================== ثبت شماره تلفن در سرور =================================
export const registerAction = createAsyncThunk(
  "auth/registerAction",
  async (data) => {
    const response = await RepositoryApi.Auth.registerUser(data);
    return response.id > 0 ? response : response;
  }
);
// ================= بعد از اینکه ثبت نام کرد حالا پسورد رو مشخص میکنه ================
export const setPassword = createAsyncThunk("auth/setUser", async (obj, {}) => {
  const response = await RepositoryApi.Auth.setPassword(obj);
  return response;
});

// ========================= درخواست توکن ====================================
export const tokenAction = createAsyncThunk(
  "auth/tokenAction",
  async (data, { fulfillWithValue, rejectWithValue, dispatch }) => {
    const response = await RepositoryApi.Auth.getToken(data);

    const token = response?.traceMessage?.token;
    if (response.id > 0) {
      const { UserId: userID } = jwt_decode(token);
      localStorage.setItem("token", token);
      message.success(response.message);
      return fulfillWithValue({ ...response, userID });
    } else {
      message.error(response.message);
      return rejectWithValue({ message: response.message, id: response.id });
    }
  }
);

// ============================== چک توکن ============================
export const checkTokenAction = createAsyncThunk(
  "auth/checkTokenAction",
  async (token, { rejectWithValue, fulfillWithValue }) => {
    if (!token) {
      return rejectWithValue();
    }

    const response = await RepositoryApi.Auth.checkToken(token);
    if (response.message === "توکن منقضی شده است") {
    }
    if (response.id < 0) {
      message.error("مجوز شما منقضی می باشد, دوباره وارد شوید ");
      localStorage.removeItem("token");
      return rejectWithValue(response);
    } else {
      const token = localStorage.getItem("token");
      const { UserId: userID } = jwt_decode(token);
      return fulfillWithValue({ ...response, token, userID });
    }
  }
);

// ========================= تغییر رمز ورود ===================================
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ obj }, { fulfillWithValue, rejectWithValue, getState }) => {
    const token = getState().auth.token;
    const response = await RepositoryApi.Auth.changePassword(token, obj);
    if (response.id < 0) {
      message.error(response.message);
      return rejectWithValue(response);
    } else {
      // message.success(response.message);
      return fulfillWithValue(response);
    }
  }
);

// ================================ فراموشی رمز ورود ===============================
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (obj, { fulfillWithValue, rejectWithValue }) => {
    const response = await RepositoryApi.Auth.forgotPassword(obj);
    if (response.id < 0) {
      message.error(response.message);
      return rejectWithValue(response);
    } else {
      const { UserId: userID } = jwt_decode(response.traceMessage.token);
      localStorage.setItem("token", response.traceMessage.token);
      message.success(response.message);
      return fulfillWithValue({ ...response, userID });
    }
  }
);

// ========================= خروج کاربر =======================================
export const logoutAction = createAsyncThunk(
  "auth/logoutAction",
  async (token) => {
    const response = await RepositoryApi.Auth.logout(token);
    if (response.id > 0) {
      localStorage.removeItem("token");
    }
    return response.id > 0 ? response : response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    expiredToken: (state) => {
      state.token = "";
      state.tokenIsValid = false;
      state.userID = "";
      state.thunkResponse = " dispatched => expiredToken ";
    },
    userCards: (state, action) => {
      state.userCards = action.payload;
    },
  },

  extraReducers: (builder) => {
    // ============== ایجاد رمز یک بار مصرف / چک کردن رمز یکبار مصرف =================
    builder.addCase(callGuestService.pending, (state, action) => {
      state.authState = "pending";
      state.thunkResponse = action;
    });
    builder.addCase(callGuestService.fulfilled, (state, action) => {
      state.authState = "fulfilled";
      state.thunkResponse = action;
    });
    builder.addCase(callGuestService.rejected, (state, action) => {
      state.authState = "rejected";
      state.thunkResponse = action;
    });

    // ========================= ثبت شماره تلفن در سرور ============================
    builder.addCase(registerAction.pending, (state, action) => {
      state.authState = "pending";
      state.thunkResponse = action;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.authState = "fulfilled";
      state.thunkResponse = action;
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.authState = "rejected";
      state.thunkResponse = action;
    });
    // ========================== درخواست توکن  ====================================
    builder.addCase(tokenAction.pending, (state, action) => {
      state.authState = "pending";
    });
    builder.addCase(tokenAction.fulfilled, (state, action) => {
      state.authState = "fulfilled";
      state.tokenIsValid = true;
      state.token = action.payload.traceMessage.token;
      state.userID = action.payload.userID;
    });
    builder.addCase(tokenAction.rejected, (state, action) => {
      state.authState = "rejected";
      state.tokenIsValid = false;
      state.token = "";
    });
    ///  ======================  خروج کاربر ============================
    builder.addCase(logoutAction.pending, (state, action) => {
      state.authState = "pending";
    });
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.authState = "fulfilled";
      state.token = "";
      state.tokenIsValid = false;
      state.userID = "";
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.authState = "rejected";
    });
    // ======================== چک کردن توکن =============================
    builder.addCase(checkTokenAction.pending, (state, action) => {
      state.authState = "pending";
    });
    builder.addCase(checkTokenAction.fulfilled, (state, action) => {
      state.authState = "fulfilled";
      state.token = action.payload.token;
      state.userID = action.payload.userID;
      state.tokenIsValid = true;
    });
    builder.addCase(checkTokenAction.rejected, (state, action) => {
      state.authState = "rejected";
      state.token = "";
      state.tokenIsValid = false;
      state.userID = "";
    });
    // ================================ فراموشی رمز ورود ===============================
    builder.addCase(forgotPassword.pending, (state, action) => {
      state.authState = "pending";
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.authState = "fulfilled";
      state.token = action.payload.traceMessage.token;
      state.userID = action.payload.userID;
      state.tokenIsValid = true;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.authState = "rejected";
      state.token = "";
      state.tokenIsValid = false;
      state.userID = "";
    });
    // ========================= تغییر رمز ورود ===================================
    builder.addCase(changePassword.rejected, (state, action) => {
      state.authState = "rejected";
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.authState = "fulfilled";
    });
    builder.addCase(changePassword.pending, (state, action) => {
      state.authState = "rejected";
    });
  },
});

export const authReducer = authSlice.reducer;
export const { expiredToken, userCards } = authSlice.actions;
