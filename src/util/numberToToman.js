// Persian Wordifier
// Version: 1.3.0
// Author: Salman Arab Ameri
// Publish: 2020-05-15
// with use of ideas in http://www.dotnettips.info/post/626/%D8%AA%D8%A8%D8%AF%DB%8C%D9%84-%D8%B9%D8%AF%D8%AF-%D8%A8%D9%87-%D8%AD%D8%B1%D9%88%D9%81

import { justToFarsi } from "./translateDigit";

export function currentSeperator(nStr, seperator) {
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(nStr)) {
    nStr = nStr.replace(rgx, "$1" + seperator + "$2");
  }
  return nStr;
}
export const tomanCurrency = (number) => {
  if (!number) return "0 تومان";
  // rial to toman
  number = String(Number(Math.floor(number / 10)));
  number = currentSeperator(number, ",");
  number = justToFarsi(number);
  return number;
};

export function toEnglishDigits(num) {
  if (num === null || num === undefined) {
    return null;
  }

  if (typeof num !== "string" || num.length === 0) return num.toString();

  const faDigits = "۰۱۲۳۴۵۶۷۸۹";
  const arDigits = "٠١٢٣٤٥٦٧٨٩";
  let output = "";
  for (let ipos = 0; ipos < num.length; ipos++) {
    let faIndex = faDigits.indexOf(num[ipos]);
    if (faIndex >= 0) {
      output += faIndex.toString();
      continue;
    }
    let arIndex = arDigits.indexOf(num[ipos]);
    if (arIndex >= 0) {
      output += arIndex.toString();
      continue;
    }
    output += num[ipos];
  }
  return output.replace(/,/g, "");
}

export function wordifyfa(input, level = 0) {
  if (input === null) {
    return "";
  }

  let num = parseInt(toEnglishDigits(input));

  // convert negative number to positive and get wordify value
  if (num < 0) {
    num = num * -1;
    return "منفی " + wordifyfa(num, level);
  }
  if (num === 0) {
    if (level === 0) {
      return "صفر";
    } else {
      return "";
    }
  }
  let result = "";
  const yekan = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
    dahgan = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
    sadgan = [
      "یکصد",
      "دویست",
      "سیصد",
      "چهارصد",
      "پانصد",
      "ششصد",
      "هفتصد",
      "هشتصد",
      "نهصد",
    ],
    dah = [
      "ده",
      "یازده",
      "دوازده",
      "سیزده",
      "چهارده",
      "پانزده",
      "شانزده",
      "هفده",
      "هیجده",
      "نوزده",
    ];

  if (level > 0) {
    result += " و ";
    level -= 1;
  }

  if (num < 10) {
    result += yekan[num - 1];
  } else if (num < 20) {
    result += dah[num - 10];
  } else if (num < 100) {
    result += dahgan[Math.floor(num / 10) - 2] + wordifyfa(num % 10, level + 1);
  } else if (num < 1000) {
    result +=
      sadgan[Math.floor(num / 100) - 1] + wordifyfa(num % 100, level + 1);
  } else if (num < 1000000) {
    result +=
      wordifyfa(Math.floor(num / 1000), level) +
      " هزار" +
      wordifyfa(num % 1000, level + 1);
  } else if (num < 1000000000) {
    result +=
      wordifyfa(Math.floor(num / 1000000), level) +
      " میلیون" +
      wordifyfa(num % 1000000, level + 1);
  } else if (num < 1000000000000) {
    result +=
      wordifyfa(Math.floor(num / 1000000000), level) +
      " میلیارد" +
      wordifyfa(num % 1000000000, level + 1);
  } else if (num < 1000000000000000) {
    result +=
      wordifyfa(Math.floor(num / 1000000000000), level) +
      " تریلیارد" +
      wordifyfa(num % 1000000000000, level + 1);
  }

  return result;
}

export function wordifyRials(num) {
  if (num === null || num === undefined || num === "") {
    return "";
  }
  return wordifyfa(num, 0) + " ریال";
}

export function wordifyRialsInTomans(num) {
  if (num === null || num === undefined || num === "") {
    return "";
    // return "  ;
  }
  if (typeof num == "string") {
    var cleanNumber = toEnglishDigits(num);
    num = parseInt(cleanNumber);
  }

  const originalAmount = num;
  if (num >= 10 || num <= -10) {
    num = Math.floor(num / 10);
  } else {
    num = 0;
  }
  const haveRial = (originalAmount / 10).toString().split(".")[1];
  return (
    (num ? wordifyfa(num, 0) + " تومان" : "تومان   " + " ۰ ") +
    (num && haveRial ? " و " : "") +
    (haveRial ? `${wordifyfa(haveRial, 0)} ریال` : "")
  );
}

export function momentApprox(
  date,
  baseDate,
  suffixBefore = "پیش",
  suffixAfter = "بعد"
) {
  return wordifyMomentApprox(date, baseDate, suffixBefore, suffixAfter, false);
}

export function wordifyMomentApprox(
  date,
  baseDate,
  suffixBefore = "پیش",
  suffixAfter = "بعد",
  doWordify = true
) {
  if (date === null || date === undefined || date === "") {
    return "";
  }
  if (baseDate == null || baseDate == undefined || baseDate == "") {
    baseDate = new Date();
  }
  if (typeof date == "string") {
    date = new Date(date);
  }
  if (typeof baseDate == "string") {
    baseDate = new Date(baseDate);
  }
  let suffix = suffixBefore;
  let diff = Math.floor((baseDate.getTime() - date.getTime()) / 1000) * 1000;
  if (diff < 0) {
    suffix = suffixAfter;
    diff = Math.abs(diff);
  }
  let diffYears = Math.floor(diff / 31557600000);
  if (diffYears > 0) {
    return (doWordify ? wordifyfa(diffYears) : diffYears) + " سال " + suffix;
  }
  let diffMonths = Math.floor(diff / 2629800000);
  if (diffMonths > 0) {
    return (doWordify ? wordifyfa(diffMonths) : diffMonths) + " ماه " + suffix;
  }
  let diffWeeks = Math.floor(diff / 604800000);
  if (diffWeeks > 0) {
    return (doWordify ? wordifyfa(diffWeeks) : diffWeeks) + " هفته " + suffix;
  }
  let diffDays = Math.floor(diff / 86400000);
  if (diffDays > 0) {
    return (doWordify ? wordifyfa(diffDays) : diffDays) + " روز " + suffix;
  }
  let diffHours = Math.floor(diff / 3600000);
  if (diffHours > 0) {
    return (doWordify ? wordifyfa(diffHours) : diffHours) + " ساعت " + suffix;
  }

  let diffMinutes = Math.floor(diff / 60000);
  if (diffMinutes > 0) {
    return (
      (doWordify ? wordifyfa(diffMinutes) : diffMinutes) + " دقیقه " + suffix
    );
  }

  let diffSeconds = Math.floor(diff / 1000);

  if (diffSeconds > 0) {
    return "چند لحظه " + suffix;
  }
  return "بلافاصله";
}

// function addCommas(nStr)
// {
//     nStr += '';
//     x = nStr.split('.');
//     x1 = x[0];
//     x2 = x.length > 1 ? '.' + x[1] : '';
//     var rgx = /(\d+)(\d{3})/;
//     while (rgx.test(x1)) {
//         x1 = x1.replace(rgx, '$1' + ',' + '$2');
//     }
//     return x1 + x2;
// }
