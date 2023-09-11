// کیف پول
export default {
  create: () => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    actionType: 1,
    jsonValues: {
      walletName: "sdfsdf",
      userId: 15,
      amount: 500,
      walletTypeId: 1,
      WalletClientId: "1584744987",
      description: "string",
      createDate: "2023-08-14T08:53:32.961Z",
      isShaparakwithdrawal: true,
      isDefualt: true,
      minimumAmount: 10,
      maximumWithdrawAmountPerTransaction: 20,
      maximumWithdrawAmountPerDay: 30,
      maximumDepositAmountPerTransaction: 40,
      maximumDepositAmountPerDay: 50,
      minimumAmountAlertInSite: true,
      minimumAmountAlertByEmail: true,
      minimumAmountAlertBySms: true,
    },
  }),

  update: () => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    actionType: 2,
    jsonValues: {
      id: 10,
      walletName: "sdfsdf235",
      userId: 15,
      amount: 500,
      walletTypeId: 1,
      WalletClientId: "1584744987",
      description: "string",
      createDate: "2023-08-14T08:53:32.961Z",
      isShaparakwithdrawal: true,
      isDefualt: true,
      minimumAmount: 10,
      maximumWithdrawAmountPerTransaction: 20,
      maximumWithdrawAmountPerDay: 30,
      maximumDepositAmountPerTransaction: 40,
      maximumDepositAmountPerDay: 50,
      minimumAmountAlertInSite: true,
      minimumAmountAlertByEmail: true,
      minimumAmountAlertBySms: true,
    },
  }),

  delete: (id) => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    actionType: 3,
    jsonValues: {
      id: id,
    },
  }),

  get: (userid) => ({
    objectId: "9c5ad0ba-21f9-4a09-8d46-3712da7cd26a",
    actionType: 4,
    jsonValues: {
      userid: userid,
    },
  }),

  // pan => شماره کارت
  estelam: (userId, cardNumber) => ({
    objectId: "9f62774e-3eb5-4ba0-a170-e243de797f8c",
    actionType: 1,
    server: 0,
    jsonValues: {
      userId,
      processId: "1",
      jsonValues: { pan: cardNumber },
    },
  }),
};
