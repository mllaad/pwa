import Header from "../../components/Header";
import Input from "../../components/baseComponents/Input";
import { route } from "./index";
import { Form, Button, message } from "antd";
import withRouter from "../../util/withModalRouter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logIn, logOut } from "../../appRedux/features/Auth";
import changePasswordObj from "../../apiCall/requestObjects/changePassword";

const ChangePassword = (props) => {
  const backHandle = () => props.closeModal();

  const formHandle = async ({
    oldPassword,
    newPassword,
    confirmNewPassword,
  }) => {
    const obj = changePasswordObj.set(
      props.auth.userID,
      oldPassword,
      newPassword,
      confirmNewPassword
    );

    const { payload } = await props.actions.changePassword({ obj });

    if (payload.id > 0) {
      props.closeModal();
      message.success(payload.message);
    } else {
      message.error(payload.message);
    }
  };

  return (
    <>
      <Header onBack={backHandle} title={"تغییر رمز ورود"} />
      <Form className="ChangePassword" onFinish={formHandle}>
        <Input
          formItemOption={{
            name: "oldPassword",
            label: "رمز قبلی",
            // rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
          }}
          componentOption={{
            style: { textAlign: "center" },
            autoComplete: "off",
            // placeholder:'توضیحات تراکنش (اختیاری)' ,
          }}
        />
        <Input
          formItemOption={{
            name: "newPassword",
            label: "رمز جدید",
            // rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
          }}
          componentOption={{
            style: { textAlign: "center" },
            autoComplete: "off",
            // placeholder:'توضیحات تراکنش (اختیاری)' ,
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
            // placeholder:'توضیحات تراکنش (اختیاری)' ,
          }}
        />
        <Button className="ChangePassword__btn" htmlType="submit">
          {" "}
          تایید{" "}
        </Button>
      </Form>
    </>
  );
};

const actionCreators = Object.assign({}, { logIn, logOut });
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
)(withRouter(ChangePassword));
