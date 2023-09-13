import { Form, Button, message as messageAnt, message } from "antd";
import { logo } from "../../assets/icons";
import "../../assets/bg.png";
import Input from "../../components/baseComponents/Input";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  // tokenAction,
  // logoutAction,
  // registerAction,
  // callGuestService,
  logIn,
  logOut,
} from "../../appRedux/features/Auth";
import withRouter from "../../util/withModalRouter";
import { useNavigate } from "react-router-dom";

const StartSection = (props) => {
  const navigate = useNavigate();
  const onSubmit = async ({ userName, password }) => {
    // const response = await props.actions.tokenAction({ userName, password });
    props.actions.logIn();
    message.success("درخواست با موفقیت انجام شد");
  };

  return (
    <div className="bg-img">
      <div className="container">
        <span className="logo"> {logo} </span>
        <Form onFinish={onSubmit} className="StartSection__form">
          <Input
            formItemOption={{
              name: "userName",
              label: "شماره تلفن همراه",
              rules: [
                {
                  pattern: /^\d{11}$/,
                  message: "شماره تلفن همراه صحیح نمی باشد",
                },
              ],
            }}
            componentOption={{
              placeholder: "شماره تلفن همراه یا نام کاربری",
              style: { textAlign: "center" },
            }}
          />
          <Input
            formItemOption={{
              name: "password",
              label: "کلمه عبور",
            }}
            componentOption={{
              placeholder: "کلمه عبور",
              style: { textAlign: "center" },
            }}
          />
          <div className="StartSection__forgot">
            <span onClick={() => navigate("ForgotPassword0")}>
              رمز خود را فراموش کرده اید؟
            </span>
          </div>
          <Button className="StartSection__btn" htmlType="submit">
            {" "}
            ورود{" "}
          </Button>
          <div className="StartSection__signup">
            <span onClick={() => navigate("PhoneNumber0")}>
              هنوز ثبت نام نکرداید؟
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

const actionCreators = Object.assign({}, { logIn, logOut });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreData,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StartSection));
