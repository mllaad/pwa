export default {
  // ایجاد رمز یک بار مصرف / چک کردن رمز یکبار مصرف
  /*1*/ CallGuestService: "api/Service/CallGuestService",
  // ثبت شماره تلفن در سرور
  /*2*/ RegisterUser: "User/RegisterUser",
  // درخواست توکن
  /*3*/ Token: "login",
  // چک کردن توکن
  /*4*/ CheckToken: "checktoken",
  //  خروج کاربر
  /*5*/ logout: "logout",

  /*6*/ ChangePassword: "User/ChangePassword",

  /*7*/ ForgotPassword: "User/ForgotPassword",

  // چک کردن اینکه کاربر قبلا ثبت نام کرده یا نه
  /*7*/ CkeckUser: "User/CheckUser",

  // بعد از اینکه ثبت نام کرد حالا پسورد مشخص میکنه
  /*8*/ setPassword: "User/SetPassword",

  // =================================
  apiService: "api/Service",
  baseURL: ["http://192.168.15.54:8081/"],
};
