import Header from "../../components/Header";
import { route } from "./index";
import { Form, Button } from "antd";
import Input from "../../components/baseComponents/Input";
import withRouter from "../../util/withModalRouter";

const Password = (props) => {
  const backHandle = () => props.closeModal();

  const formHandle = () => null;

  return (
    <>
      <Header onBack={backHandle} title={"رمز ورود"} />
      <Form className="Password" onFinish={formHandle}>
        <Input
          formItemOption={{
            name: "confirmNewPassword",
            label: "تکرار رمز جدید",
            rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
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
            rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
          }}
          componentOption={{
            style: { textAlign: "center" },
            autoComplete: "off",
            // placeholder:'توضیحات تراکنش (اختیاری)' ,
          }}
        />
        <Button className="Password__btn" htmlType="submit">
          {" "}
          تایید{" "}
        </Button>
      </Form>
    </>
  );
};

export default withRouter(Password);
