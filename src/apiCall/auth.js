import URLS from "./urlConfig";
import futch from "./futch";

// فقط با توکن
const tokenConfig = (token, urlEndPoint) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer " + token);
  let options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({}),
    redirect: "follow",
  };
  const url = URLS.baseURL[0] + urlEndPoint;
  return { url, options };
};

// با توکن و با آبجکت
const tokenAndObjConfig = (token, obj, urlEndPoint) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer " + token);
  let options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(obj),
    redirect: "follow",
  };
  const url = URLS.baseURL[0] + urlEndPoint;
  return { url, options };
};
//  بدونه توکن
const config = (data, urlEndPoint) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
    redirect: "follow",
  };
  const url = URLS.baseURL[0] + urlEndPoint;
  return { url, options };
};

// ===================================== ایجاد رمز یک بار مصرف / چک کردن رمز یکبار مصرف =========================
const callGuestService = async (data) => {
  const { url, options } = config(data, URLS.CallGuestService);
  const response = await futch(url, options);
  return response;
};

// ================================== درخواست اس ام اس برایه شماره تلفن رمز 4 رقمی بیاد ==========================
const registerUser = async (data) => {
  const { url, options } = config(data, URLS.RegisterUser);
  const response = await futch(url, options);
  return response;
};
// ================================= در خواست توکن بعد از ثبت 4 رقم از اس ام اس =============================
const getToken = async (data) => {
  const { url, options } = config(data, URLS.Token);
  const response = await futch(url, options);
  return response;
};
// ================================= چک توکن =================================
const checkToken = async (token) => {
  const { url, options } = tokenConfig(token, URLS.CheckToken);
  const response = await futch(url, options);
  return response;
};
// =============================== خروج ===============================
const logout = async (token) => {
  const { url, options } = tokenConfig(token, URLS.logout);
  const response = await futch(url, options);
  return response;
};

// ============================= تغییر رمز ===============================
const changePassword = async (token, data) => {
  const { url, options } = tokenAndObjConfig(token, data, URLS.ChangePassword);
  const response = await futch(url, options);
  return response;
};

// ===================== فراموشی رمز ==================================
const forgotPassword = async (data) => {
  const { url, options } = config(data, URLS.ForgotPassword);
  const response = await futch(url, options);
  return response;
};

// =================== چک کردن اینکه کاربر قبلا ثبت نام کرده یا نه ======================
const alreadyRigestered = async (data) => {
  const { url, options } = config(data, URLS.CkeckUser);
  const response = await futch(url, options);
  return response;
};

// ================= بعد از اینکه ثبت نام کرد حالا پسورد رو مشخص میکنه =====================================
const setPassword = async (data) => {
  const { url, options } = config(data, URLS.setPassword);
  const response = await futch(url, options);
  return response;
};

export default {
  callGuestService,
  registerUser,
  getToken,
  checkToken,
  logout,
  changePassword,
  forgotPassword,
  alreadyRigestered,
  setPassword,
};
