export function justToEnglish(num) {
  if (!num) return num;
  num = String(num);
  var id = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  const _num = [...num];
  const toEnglish = _num.reduce((t, v) => {
    let digit;
    if (v === "0") {
      return t + 0;
    }
    if (!Number(v) && !id[v]) {
      return t;
    }
    if (Number(v)) {
      digit = v;
    }
    if (id[v]) {
      digit = id[v];
    }
    return t + digit;
  }, "");
  return toEnglish;
}

export function justToFarsi(num) {
  if (!num) return console.error("justToFarsi(num) Problem!!!!!!!");
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const _num = num
    .toLocaleString()
    .toString()
    .replace(/[0-9]/g, (w) => id[+w]);

  return _num;
}
