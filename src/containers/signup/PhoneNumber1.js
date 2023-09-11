import { logo } from "../../assets/icons";
import { Form, Button, message } from "antd";
import Input from "../../components/baseComponents/Input";
import {
  tokenAction,
  logoutAction,
  registerAction,
  callGuestService,
} from "../../appRedux/features/Auth";
import { connect } from "react-redux";
import otp from "../../apiCall/requestObjects/otp";
import { bindActionCreators } from "redux";
import timer from "../../util/timer";
import withRouter from "../../util/withModalRouter";
import { useEffect } from "react";
import { useState } from "react";
import { justToFarsi, justToEnglish } from "../../util/translateDigit";
import { useNavigate } from "react-router-dom";

const PhoneNumber1 = (props) => {
  const navigate = useNavigate();
  const userId = props.router.location.state?.userId;
  const phoneNumber = props.router.location.state?.phoneNumber;
  const security = props.router.location.state?.security;

  const [time, setTime] = useState("02:00");
  useEffect(() => {
    if (time === "02:00") {
      timer.clear();
      timer.start((min, sec) => setTime(`${min}:${sec}`));
    }
  }, [time]);

  // چک اس ام اس
  const smsCheck = async (codeVER) => {
    const obj = otp.check(userId, codeVER);
    return await props.actions.callGuestService(obj);
  };

  // ثبت شماره در سرور
  const createUser = async () =>
    await props.actions.registerAction({
      userName: phoneNumber,
    });

  // درخواست توکن
  // const getToken = async () =>
  //   await props.actions.tokenAction({
  //     userName: phoneNumber,
  //     password: phoneNumber,
  //   });

  const formHandle = async ({ codeVER }) => {
    let response;
    response = await smsCheck(codeVER);
    if (response.payload.id < 0) {
      message.error(response.payload.message);
      return;
    }
    response = await createUser();
    if (response.payload.id < 0) {
      message.error(response.payload.message);
      // return;
    }
    navigate("../PhoneNumber2", {
      state: { security: true, userName: phoneNumber, userId },
    });
    // response = await getToken();
    // if (response.payload.id < 0) {
    //   message.error(response.payload.message);
    //   return;
    // }
  };

  // اس ام اس مجدد
  const callSMSHandle = async () => {
    if (time === "0:00") return;
    const obj = otp.get(phoneNumber);
    const { payload } = await props.actions.callGuestService(obj);
    if (payload.id > 0) {
      message.success(payload.message);
      setTime("02:00");
    }
  };

  if (!security) {
    navigate("../");
  }

  return (
    <div className="bg-img">
      <div className="container">
        <span className="logo"> {logo} </span>
        <Form className="PhoneNumber1__form" onFinish={formHandle}>
          <Input
            formItemOption={{
              name: "otp",
              label: "کد تایید",
              rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
            }}
            componentOption={{
              style: { textAlign: "center" },
              autoComplete: "off",
              placeholder: "کد تایید ارسال شده را وارد کنید",
            }}
          />
          <div className="PhoneNumber1__time">
            <span
              className=""
              style={{ width: "30px", display: "inline-block" }}
            >
              {justToFarsi(time)}
            </span>
            <span className=""> : زمان تایید کد ارسال شده </span>
          </div>
          <div className="PhoneNumber1__showInfo">
            <span className="">کد فعال سازی به شماره</span>
            <span className=""> {justToFarsi(phoneNumber)} </span>
            <span className=""> ارسال شد </span>
          </div>
          <div style={{ display: "flex" }}>
            <span
              className="PhoneNumber1__back"
              onClick={() =>
                navigate("../PhoneNumber0", { state: phoneNumber })
              }
            >
              اصلاح شماره تلفن
            </span>
          </div>
          <Button className="PhoneNumber1__btn" htmlType="submit">
            {" "}
            تایید{" "}
          </Button>
          <div
            className="PhoneNumber1__sendagain"
            onClick={callSMSHandle}
            style={time === "0:00" ? {} : { color: "#666666" }}
          >
            ارسال مجدد کد تایید
          </div>
        </Form>
      </div>
    </div>
  );
};

const actionCreators = Object.assign(
  {},
  { tokenAction, logoutAction, registerAction, callGuestService }
);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  router: state.router,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PhoneNumber1));
