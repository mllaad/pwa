export default {
  // لیست قبض ها
  billLists: {
    server: 0,
    objectId: "1ae6af1f-5195-4136-bed1-9a3277f23841",
    actionType: 0,
    jsonValues: {},
    type: " لیست قبض ها",
  },

  // لیست قبض های پرداخت شده
  allPayed: (userid) => ({
    server: 0,
    objectId: "c90c0c25-8f16-4ad9-953a-1f879013df93",
    actionType: 0,
    jsonValues: { userid },
    type: "لیست قبض های پرداخت شده",
  }),

  // ============================================================
  // لیست قبض های کاربر
  get: (userid, billingtypeid) => ({
    objectId: "c90c0c25-8f16-4ad9-953a-1f879013df93",
    actionType: 4,
    // userID => ای دی کاربر دردیتا بیس
    // billingtypeid => نوع قبض
    jsonValues: { userid, billingtypeid },
    server: 0,
    type: " لیست قبض های کاربر",
  }),

  // ذخیره قبض
  create: (senderuserid, billingTypeId, name, billId) => ({
    objectId: "c90c0c25-8f16-4ad9-953a-1f879013df93",
    server: 0,
    actionType: 1,
    jsonValues: { senderuserid, billingTypeId, name, billId },
    type: "ذخیره قبض",
  }),

  // حذف قبض
  delete: (id) => ({
    objectId: "c90c0c25-8f16-4ad9-953a-1f879013df93",
    server: 0,
    actionType: 3,
    jsonValues: { id },
    type: "حذف قبض",
  }),

  // ویرایش قبض
  update: (id, name, billingTypeId, senderUserId, billID) => ({
    objectId: "c90c0c25-8f16-4ad9-953a-1f879013df93",
    server: 0,
    actionType: 2,
    jsonValues: { id, name, billingTypeId, senderUserId, billID },
  }),
  // ===========================================================
  estelam: {
    barq: (billId) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      // actionType => نوع قبض
      actionType: 2,
      jsonValues: { billId: billId, traceNumber: "" },
    }),
    telphon: (billId) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      actionType: 4,
      jsonValues: { billId, traceNumber: "" },
      type: "قبض تلفن ثابت",
    }),
    ab: (BillID) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      // actionType => نوع قبض
      actionType: 1,
      jsonValues: { BillID, traceNumber: "" },
    }),
    gas: (billId) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      // actionType => نوع قبض
      actionType: 3,
      jsonValues: { billId, traceNumber: "" },
    }),
    hamrahAval: (billId) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      // actionType => نوع قبض
      actionType: 5,
      jsonValues: { billId, traceNumber: "" },
    }),
    raitel: (billId) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      // actionType => نوع قبض
      actionType: 6,
      jsonValues: { billId, traceNumber: "" },
    }),
    irancel: (billId) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      // actionType => نوع قبض
      actionType: 7,
      jsonValues: { billId, traceNumber: "" },
    }),
    // عوارض نوسازی شهرداری
    avarezShahrdariTehran: (billId) => ({
      objectId: "fd041910-3454-4e06-9902-da7d14cf3c40",
      // actionType => نوع قبض
      actionType: 10,
      jsonValues: { billId, traceNumber: "" },
      type: "عوارض نوسازی شهرداری",
    }),
  },
};

var checkType = {
  1: "آب",
  2: "برق",
  3: "تلفن ثابت",
  4: "گاز",
  5: "همراه اول",
  6: "رایتل",
  7: "ایرانسل",
  8: "عوارض شهرداری",
  9: "لیست قبوض پرداخت شده",
  10: "سایر قبوض ها",
};
