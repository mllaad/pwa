import { Button, Form, Input } from "antd";
import InputNumber from "./baseComponents/InputNumber";
import InputPassword from "./baseComponents/InputPassword";

const PaymentRequest = ({ onPaymentRequest }) => {
  const formHandle = (payment) => onPaymentRequest(payment);

  return (
    <Form className="PaymentRequest__form" onFinish={formHandle}>
      <div className="PaymentRequest__wrap">
        <Button className="PaymentRequest__poiaBtn"> رمز پویا </Button>

        <InputPassword
          formItemOption={{
            style: { width: "100%" },
            name: "pass",
            rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
          }}
          componentOption={{
            placeholder: "رمز",
            style: {},
          }}
        />
      </div>
      <InputPassword
        formItemOption={{
          name: "cvv",
          rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
        }}
        componentOption={{
          placeholder: "CCV2",
          type: "password",
          style: { textAlign: "center" },
        }}
      />
      <Button className="PaymentRequest__btn" htmlType="submit">
        {"پرداخت"}
      </Button>
    </Form>
  );
};

export default PaymentRequest;
