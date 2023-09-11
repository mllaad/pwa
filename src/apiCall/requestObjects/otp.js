import { v4 as uuidv4 } from "uuid";

export default {
  get: (phoneNumber) => ({
    objectId: "65912D8A-3FA9-47C7-94B4-C417F775CCBF",
    actionType: 0,
    jsonValues: { id: 0, mobileNo: phoneNumber, mobileGuId: uuidv4() },
  }),

  /*
  id =>  otp.get = { response.traceMessage.id }
  */
  check: (id, otpCode) => ({
    objectId: "5E49E7DD-E81F-4A60-A0DE-2A50090BCA68",
    actionType: 0,
    jsonValues: { id: id, otp: otpCode },
  }),
};
