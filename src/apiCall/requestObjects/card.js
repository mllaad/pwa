export default {
  create: (userid, CardNumber, Year, Month) => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    actionType: 6,
    server: 0,
    jsonValues: {
      userid,
      CardNumber,
      Year,
      Month,
      IsDefault: true,
    },
    type: "ساختن کارت",
  }),
  get: (userid) => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    actionType: 9,
    server: 0,
    jsonValues: { userid },
    type: "کارت های کاربر",
  }),
  delete: (id) => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    server: 0,
    actionType: 8,
    jsonValues: { id },
    type: "حذف کارت",
  }),

  update: (id, userid, CardNumber, Year, Month) => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    actionType: 7,
    server: 0,
    jsonValues: {
      id,
      userid,
      CardNumber,
      Year,
      Month,
      IsDefault: true,
    },
    type: "آپدیت کارت کاربر",
  }),
};
