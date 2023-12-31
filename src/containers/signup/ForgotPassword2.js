import React from "react";
import { Button, Form } from "antd";
import Input from "../../components/baseComponents/Input";
import { logo } from "../../assets/icons";
import forgotPasswordObj from "../../apiCall/requestObjects/forgotPassword";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
import { useNavigate } from "react-router-dom";

const ForgotPassword2 = (props) => {
  const navigate = useNavigate();
  const security = props.router.location.state?.security;
  const userName = props.router.location.state?.userName;

  const formHandle = async ({ newPassword, confirmNewPassword }) => {
    const obj = forgotPasswordObj.set(
      userName,
      newPassword,
      confirmNewPassword
    );

    // const { payload } = await props.actions.forgotPassword(obj);
    // if (payload.id > 0) {
    //   message.success("رمز عبور تغییر یافت");
    // }
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

const actionCreators = Object.assign({}, {});
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
)(withRouter(ForgotPassword2));
