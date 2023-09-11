import { justToEnglish, justToFarsi } from "./translateDigit";

// ===============================================
export const cardNumber_Formatter = (value) =>
  justToFarsi(`${justToEnglish(value)}`.replace(/(\d{4})/g, "$1  "));

//   =============================================

export class DateFormatter {
  constructor() {
    this.isZeroRightSide = false;
  }
  format(value) {
    if (justToEnglish(value) === "0") {
      this.isZeroRightSide = true;
      return justToFarsi(justToEnglish(value));
    }
    if (this.isZeroRightSide) {
      this.isZeroRightSide = false;
      return justToFarsi("0" + justToEnglish(value));
    }
    return justToFarsi(value);
  }
}
