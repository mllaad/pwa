import melli from "../assets/banks/Melli";
import sepah from "../assets/banks/Sepah";
import Tosee_Saderat1 from "../assets/banks/Tosee_Saderat";
import Sanat_Madan from "../assets/banks/Sanat_Madan";
import Keshavarzi from "../assets/banks/Keshavarzi";
import Maskan from "../assets/banks/Maskan";
import Postbank from "../assets/banks/Postbank";
import Tosee_Taavon from "../assets/banks/Tosee_Taavon";
import Eghtesad_Novin from "../assets/banks/Eghtesad_Novin";
import Parsian from "../assets/banks/Parsian";
import Karafarin from "../assets/banks/Karafarin";
import Saman from "../assets/banks/Saman";
import Sina from "../assets/banks/Sina";
import Sarmayeh from "../assets/banks/Sarmayeh";
import Shahr from "../assets/banks/Shahr";
import Dey from "../assets/banks/Dey";
import Saderat from "../assets/banks/Saderat";
import Mellat from "../assets/banks/Mellat";
import Tejarat from "../assets/banks/Tejarat";
import Refah from "../assets/banks/Refah";
import Ansar from "../assets/banks/Ansar";

export const bankLogo = (cardNumber) => {
  try {
    cardNumber = String(cardNumber);
  } catch {
    return melli;
  }

  const check = /\d{16}/.test(cardNumber);
  if (check) {
    const bankType = cardNumber.match(/^\d{6}/);
    const logo = Banks[bankType];
    return logo ? logo : Saman;
  } else {
    return Saman;
  }
};

var Banks = {
  603799: melli,
  589210: sepah,
  627648: Tosee_Saderat1,
  627961: Sanat_Madan,
  603770: Keshavarzi,
  628033: Maskan,
  627760: Postbank,
  502908: Tosee_Taavon,
  627412: Eghtesad_Novin,
  622106: Parsian,
  502229: Karafarin,
  621986: Saman,
  639346: Sina,
  639607: Sarmayeh,
  // 636214: 'Tat',
  502806: Shahr,
  502938: Dey,
  603769: Saderat,
  610433: Mellat,
  627353: Tejarat,
  589463: Refah,
  627382: Ansar,
};

export const simCardName = (phoneNumber) => {
  if (typeof phoneNumber === "string") {
    //  4 رقم اول
    const code = phoneNumber.match(/^09[0-9][0-9]/);
    if (!code) return;
    const _code = code[0];

    const simcard = [
      { title: "hamrahaval", code: "0990" },
      { title: "hamrahaval", code: "0991" },
      { title: "hamrahaval", code: "0992" },
      { title: "hamrahaval", code: "0993" },
      { title: "hamrahaval", code: "0994" },
      { title: "hamrahaval", code: "0910" },
      { title: "hamrahaval", code: "0911" },
      { title: "hamrahaval", code: "0912" },
      { title: "hamrahaval", code: "0913" },
      { title: "hamrahaval", code: "0914" },
      { title: "hamrahaval", code: "0915" },
      { title: "hamrahaval", code: "0916" },
      { title: "hamrahaval", code: "0917" },
      { title: "hamrahaval", code: "0918" },
      { title: "irancell", code: "0930" },
      { title: "irancell", code: "0933" },
      { title: "irancell", code: "0935" },
      { title: "irancell", code: "0936" },
      { title: "irancell", code: "0937" },
      { title: "irancell", code: "0938" },
      { title: "irancell", code: "0939" },
      { title: "irancell", code: "0901" },
      { title: "irancell", code: "0902" },
      { title: "irancell", code: "0903" },
      { title: "irancell", code: "0904" },
      { title: "irancell", code: "0905" },
      { title: "irancell", code: "0941" },
      { title: "raitel", code: "0920" },
      { title: "raitel", code: "0921" },
      { title: "raitel", code: "0922" },
    ].find(({ code }) => code === _code);
    if (simcard) return simcard.title;
    //   else
    if (!simcard) {
      const [_code] = phoneNumber.match(/^09[0-9][0-9][0-9][0-9]/);
      const simcard = [
        { title: "shatel", code: "099810" },
        { title: "shatel", code: "099811" },
        { title: "shatel", code: "099812" },
        { title: "shatel", code: "099814" },
        { title: "shatel", code: "099815" },
      ].find(({ code }) => code === _code);
      return simcard ? simcard.title : null;
    }
  }
  return null;
};

// ۰۹۹۸۱۰- ۰۹۹۸۱۱ – ۰۹۹۸۱۲ – ۰۹۹۸۱۴ – ۰۹۹۸۱۵
