export const toPersianDigits = (s) => {
  let _s = typeof s === "number" ? s.toString() : s;
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return _s.replace(/[0-9]/g, (w) => id[+w]);
};

export const digitToTomanCurrency = (digit) => {
  let currency;

  // =============== checkType ======================
  try {
    // in toman
    currency = String(Math.trunc(digit / 10));
  } catch {
    return console.error("type of Digit is Wrong!!!!!");
  }
  // need to be dir => rtl || style=direction => rtl
  return `${currency}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
