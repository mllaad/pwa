import {
  internetLogo,
  swipeCard,
  bi_iphone,
  check,
  loan_icon,
  arcticons_receiptmanager,
  raphael_car,
  raphael_car_2,
  costemer_club,
  festival,
  shopping,
} from "../../assets/icons";
import {
  aboutUs,
  backUp,
  exit,
  setting,
  menuWallet,
} from "../../assets/menu/index";
import _card from "../../assets/card.svg";
import {
  footerLeft,
  footerMiddle,
  footerRight,
} from "../../assets/footer/footer";

// MENU
export const menu = [
  {
    icon: menuWallet,
    text: "برداشت از کیف پول",
    path: "Menu/TakeWallet",
    type: "modal",
  },
  {
    icon: setting,
    text: "تنضیمات امنیت",
    path: "Menu/Security",
    type: "modal",
  },
  { icon: backUp, text: "پشتیبانی", path: null, type: "alert" },
  { icon: aboutUs, text: "درباره ما", path: "Menu/AboutUs", type: "modal" },
  { icon: exit, text: "خروج از حساب کاربری", path: "Exit", type: "alert" },
];

export const notif = [
  "برای استفاده از تمام امکانات برنامه اطلاعات فردی خود را کامل کنید. انجام خدماتی مانند استعلام خلافی خودرو و یا استعلام عوارض شهرداری نیاز به احراز هویت دارند.    با تنها یکبار تکمیل اطلاعات فردی خود دیگر نیاز به احراز هویت برای خدمات متفاوت نخواهید داشت.",
  "برای اطلاع از جشنواره ها و اخبار مهم، اعلان های برنامه را فعال کنید. بیشتر",
  "با عضویت در باشگاه مشتریان از آخرین اخبار مربوط به تغییرات برنامه مطلع شوید.  بیشتر ",
  "با عضویت در باشگاه مشتریان از آخرین اخبار مربوط به تغییرات برنامه مطلع شوید.  بیشتر ",
  "با عضویت در باشگاه مشتریان از آخرین اخبار مربوط به تغییرات برنامه مطلع شوید.  بیشتر ",
  "با عضویت در باشگاه مشتریان از آخرین اخبار مربوط به تغییرات برنامه مطلع شوید.  بیشتر ",
];

// GRID
export const grid = [
  {
    text: "بسته اینترنت",
    svg: internetLogo,
    path: "Internet",
    //  clickHandle: () => navigate('Internet', { state : { modal : true }})
  },
  {
    text: "کارت به کارت",
    svg: swipeCard,
    path: "CardByCard",
  },
  {
    text: "شارژ",
    svg: bi_iphone,
    path: "Simcard",
  },
  {
    text: "خدمات اتباع",
    svg: check,
    path: "",
  },
  {
    text: "وام فوری",
    svg: loan_icon,
    span: 2,
    path: "",
  },
  {
    text: "پرداخت قبض",
    svg: arcticons_receiptmanager,
    path: "Bill",
  },
  {
    text: "خلافی خودرو",
    svg: raphael_car,
    path: "Violation",
  },
  {
    text: "عوارض",
    svg: raphael_car_2,
    path: "Tax",
  },
  {
    text: "جشنواره ها",
    svg: festival,
    path: "",
  },
  {
    text: "باشگاه مشتریان",
    svg: costemer_club,
    path: "",
  },
  {
    text: "فروشگاه",
    svg: shopping,
    path: "",
  },
];

// FOOTER
export const footers = [
  {
    text: "تراکنش ها",
    svg: footerLeft,
    // path: "",
    // فعلا کار داره
    path: "AllPayList",
  },
  {
    text: "کد QR",
    svg: footerMiddle,
    path: "",
  },
  {
    text: " افزایش موجودی",
    svg: footerRight,
    path: "AddWallet",
  },
];
