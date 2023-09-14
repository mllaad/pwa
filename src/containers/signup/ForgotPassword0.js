import React from "react";
import { Button, Form } from "antd";
import Input from "../../components/baseComponents/Input";
import { logo } from "../../assets/icons";
import { bindActionCreators } from "redux";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { logIn, logOut } from "../../appRedux/features/Auth";
import otp from "../../apiCall/requestObjects/otp";
import { useNavigate } from "react-router-dom";
const ForgotPassword0 = (props) => {
  const navigate = useNavigate();

  const userName = props.router.location.state?.userName;
  const formHandle = async ({ userName }) => {
    const obj = otp.get(userName);
    // const { payload } = await props.actions.callGuestService(obj);
    // if (pa) {
    navigate("../ForgotPassword1");
    // , {
    // state: {
    //   id: payload.traceMessage.id,
    //   userName,
    //   security: true,
    // },
    // });
    // }
  };

  return (
    <>
      <div className="bg-img">
        <div className="container">
          <span className="logo"> {logo} </span>
          <Form className="ForgotPassword0__form" onFinish={formHandle}>
            <Input
              formItemOption={{
                name: "userName",
                label: "شماره تلفن همراه",
                rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
                initialValue: userName,
              }}
              componentOption={{
                style: { textAlign: "center" },
                autoComplete: "off",
                placeholder: "90269323517",
              }}
            />
            <Button className="ForgotPassword0__btn" htmlType="submit">
              {" "}
              تایید{" "}
            </Button>
            <div className="PhoneNumber0__login">
              <span onClick={() => navigate("../")}>برگشت یه صفحه قبل</span>
            </div>
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
)(withRouter(ForgotPassword0));
