import React, { useEffect, useRef } from "react";
import { Button, Form, message } from "antd";
import Input from "../../components/baseComponents/Input";
import { useState } from "react";
import { logo } from "../../assets/icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { callGuestService, forgotPassword } from "../../appRedux/features/Auth";
import otp from "../../apiCall/requestObjects/otp";
import withRouter from "../../util/withModalRouter";
import timer from "../../util/timer";
import { useNavigate } from "react-router-dom";

const ForgotPassword1 = (props) => {
  const navigate = useNavigate();
  const userName = props.router.location.state?.userName;
  const id = props.router.location.state?.id;
  const security = props.router.location.state?.security;
  let [time, setTime] = useState("02:00");

  useEffect(() => {
    if (time === "02:00") {
      timer.clear();
      timer.start((min, sec) => setTime(`${min}:${sec}`));
    }
  }, [time]);

  const formHandle = async (f) => {
    const obj = otp.check(id, f.otp);
    const { payload } = await props.actions.callGuestService(obj);
    if (payload.id > 0) {
      navigate("../ForgotPassword2", { state: { userName, security: true } });
    }
  };

  const callSMSHandle = async () => {
    if (time === "0:00") return;
    const obj = otp.get(userName);
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
    <>
      <div className="bg-img">
        <div className="container">
          <span className="logo"> {logo} </span>
          <Form className="ForgotPassword1__form" onFinish={formHandle}>
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
            <div className="ForgotPassword__time">
              <span className=""> زمان تایید کد ارسال شده : </span>{" "}
              <span className="">{time}</span>
            </div>

            <Button className="ForgotPassword1__btn" htmlType="submit">
              {" "}
              تایید{" "}
            </Button>

            <div
              className="ForgotPassword__sendagain"
              onClick={callSMSHandle}
              style={time === "0:00" ? {} : { color: "#666666" }}
            >
              ارسال مجدد کد تایید
            </div>
            <div
              className="ForgotPassword__back"
              onClick={() =>
                navigate("../ForgotPassword0", { state: { userName } })
              }
            >
              برگشت
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

const actionCreators = Object.assign({}, { forgotPassword, callGuestService });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreServices.coreData,
  router: state.router,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ForgotPassword1));
