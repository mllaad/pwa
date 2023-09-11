import { logo } from "../../assets/icons";
import { Form, Button } from "antd";
import Input from "../../components/baseComponents/Input";

const CodeMeliNumberVER = ({ route, setRoute }) => {
  const submitHandle = () => {
    setRoute("Succeed");
  };

  return (
    <div className="bg-img">
      <div className="container">
        <span className="logo"> {logo} </span>
        <Form onFinish={submitHandle} className="form">
          <div className="form__content">
            <Input
              formItemOption={{
                name: "value",
                label: "کد تایید",
                rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
              }}
              componentOption={{
                placeholder: "کد تایید ارسال شده را وارد کنید",
                style: { textAlign: "center" },
              }}
            />
            <div className="center_s">
              <h3 style={{ textAlign: "center" }}>
                ارسال مجدد کد تایید {"time"}
              </h3>
            </div>
            <Button className="form__btn" htmlType="submit">
              {" "}
              تایید{" "}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CodeMeliNumberVER;
