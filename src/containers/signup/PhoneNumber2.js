import React from "react";
import { Button, Form, message } from "antd";
import Input from "../../components/baseComponents/Input";
import { logo } from "../../assets/icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
import { useNavigate } from "react-router-dom";
import {
  // tokenAction,
  // logoutAction,
  // registerAction,
  // callGuestService,
  // setPassword,
  logOut,
  logIn,
} from "../../appRedux/features/Auth";
import changePasswordObj from "../../apiCall/requestObjects/changePassword";

const PhoneNumber2 = (props) => {
  const navigate = useNavigate();
  const userId = props.router.location.state?.userId;
  const security = props.router.location.state?.security;
  /*
      شماره تلفن قبلی که
    به عنوان پسورد ثبت میشه
      */

  const userName = props.router.location.state?.userName;

  const formHandle = async ({ newPassword, confirmNewPassword }) => {
    const obj = changePasswordObj.set(
      userId,
      userName,
      newPassword,
      confirmNewPassword
    );

    const { payload } = await props.actions.setPassword(obj);
    if (payload.id > 0) {
      message.success("رمز عبور تغییر یافت");
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
          <Form className="ForgotPassword2__form" onFinish={formHandle}>
            <Input
              formItemOption={{
                name: "newPassword",
                label: "رمز جدید",
                // rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
              }}
              componentOption={{
                style: { textAlign: "center" },
                autoComplete: "off",
                placeholder: "کد تایید ارسال شده را وارد کنید",
              }}
            />
            <Input
              formItemOption={{
                name: "confirmNewPassword",
                label: "تکرار رمز جدید",
                // rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
              }}
              componentOption={{
                style: { textAlign: "center" },
                autoComplete: "off",
                placeholder: "کد تایید ارسال شده را وارد کنید",
              }}
            />
            <Button className="ForgotPassword2__btn" htmlType="submit">
              {" "}
              تایید{" "}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
const actionCreators = Object.assign({}, { logIn, logOut });
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
)(withRouter(PhoneNumber2));
