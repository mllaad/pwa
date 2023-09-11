import { Button, Form } from "antd";
import InputNumber from "./baseComponents/InputNumber";

const PaymentRequest = ({ onPaymentRequest }) => {
  const formHandle = (payment) => onPaymentRequest(payment);

  return (
    <Form className="PaymentRequest__form" onFinish={formHandle}>
      <div className="PaymentRequest__wrap">
        <Button className="PaymentRequest__poiaBtn"> رمز پویا </Button>
        <InputNumber
          formItemOption={{
            style: { width: "100%" },
            name: "pass",
            rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
          }}
          componentOption={{
            placeholder: "رمز",
            style: { textAlign: "center", height: "48px" },
          }}
        />
      </div>
      <InputNumber
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
