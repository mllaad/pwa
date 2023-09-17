import { Form, Button, message as messageAnt } from "antd";
import { useState } from "react";
import { logo } from "../../assets/icons";
import "../../assets/bg.png";
import Checkbox from "../../components/baseComponents/Checkbox";
import Input from "../../components/baseComponents/Input";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  // tokenAction,
  // logoutAction,
  // registerAction,
  // callGuestService,
  // alreadyRigestered,
  logIn,
  logOut,
} from "../../appRedux/features/Auth";
import { useNavigate } from "react-router-dom";
import withRouter from "../../util/withModalRouter";

const PhoneNumber0 = (props) => {
  const phoneNumber = props.router.location.state?.phoneNumber;

  console.log(phoneNumber, "phoneNumber");

  const navigate = useNavigate();
  const [btnIsBlue, setBtnIsBlue] = useState(false);
  const btnStyle = !btnIsBlue
    ? { background: "#CCCCCC" }
    : { backgroundColor: "#0554F2" };

  // const createUser = async (phoneNumber) =>
  //   await props.actions.registerAction({
  //     userName: phoneNumber,
  //   });

  const alreadyRigestered = async (phoneNumber) =>
    await props.actions.alreadyRigestered({ userName: phoneNumber });

  const requestSMS = async (phoneNumber) => null;
  // await props.actions.callGuestService(otp.get(phoneNumber));

  const onSubmit = async ({ phoneNumber, check }) => {
    if (!check) return;
    let response;

    response = await alreadyRigestered(phoneNumber);
    if (response.payload.id < 0) {
      messageAnt.error(response.payload.message || "ناشناس");
      // قبلا ثبت شده
      if (response.payload.id == -10) {
        navigate("../");
      }
      // return;
    }

    response = await requestSMS(phoneNumber);
    if (response.payload.id < 0) {
      messageAnt.error(response.payload.message || "ناشناس");
      return;
    }

    messageAnt.success(response.payload.message);
    navigate("../PhoneNumber1", {
      state: {
        userId: response.payload.traceMessage.id,
        phoneNumber: phoneNumber,
        security: true,
      },
    });
  };

  return (
    <div className="bg-img">
      <div className="container">
        <span className="logo"> {logo} </span>
        <Form onFinish={onSubmit} className="PhoneNumber0__form">
          <Input
            formItemOption={{
              name: "phoneNumber",
              label: "شماره تلفن همراه",
              rules: [
                {
                  pattern: /^\d{11}$/,
                  message: "شماره تلفن همراه صحیح نمی باشد",
                },
              ],
              initialValue: phoneNumber,
            }}
            componentOption={{
              placeholder: "شماره تلفن همراه",
              style: { textAlign: "center" },
            }}
          />
          <Input
            formItemOption={{
              name: "IdentificationCode",
              label: "کد معرف ",
              rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
            }}
            componentOption={{
              placeholder: "کد معرف خود را وارد کنید ",
              style: { textAlign: "center" },
            }}
          />
          <div className="PhoneNumber0__checkbox">
            <span className="PhoneNumber0__link">تایید قوانین و مقررات</span>
            <Checkbox
              formItemOption={{ name: "check" }}
              componentOption={{
                checked: true,
                onChange: () => setBtnIsBlue((t) => !t),
              }}
            />
          </div>

          <Button
            style={btnStyle}
            className="PhoneNumber0__btn"
            htmlType="submit"
          >
            {" "}
            ثبت نام{" "}
          </Button>

          <div className="PhoneNumber0__login">
            <span onClick={() => navigate("../")}>قبلا ثبت نام کرده اید؟</span>
          </div>
        </Form>
      </div>
    </div>
  );
};

const actionCreators = Object.assign(
  {},
  {
    // tokenAction,
    // logoutAction,
    // registerAction,
    // callGuestService,
    // alreadyRigestered,
    logIn,
    logOut,
  }
);
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreData,
  router: state.router,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PhoneNumber0));
