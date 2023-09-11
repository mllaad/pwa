import { route } from "./index";
import CarPelakInput from "../../components/CarPelakInput";
import { Button, Form } from "antd";
import Input from "../../components/baseComponents/Input";
import Checkbox from "../../components/baseComponents/Checkbox";
import { useState } from "react";
import Header from "../../components/Header";

const Pelak = (props) => {
  // routeState.mode => add or edit
  const header = true === "add" ? " افزودن پلاک جدید" : "ویرایش پلاک";
  const btnName = true === "add" ? "افزودن" : "ویرایش";

  const [pelak, setPelak] = useState(null);

  const backHandle = () => null;
  const pelakHandle = (value) => setPelak(value);
  const formHandle = ({ carName, fromWallet }) => null;

  return (
    <>
      <Header onBack={backHandle} title={header} />
      <div className="carbill-add"></div>
      <div className="carbillsetting">
        <CarPelakInput onCompelete={pelakHandle} />
        <Form onFinish={formHandle} className="carbillsetting__form">
          <Input
            formItemOption={{
              name: "carName",
              label: "نام خودرو",
              rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
            }}
            componentOption={{
              style: { textAlign: "right" },
              className: "normal-input",
              placeholder: "برای این پلاک یک نم انتخاب کنید",
            }}
          />
          {/* <Checkbox /> */}
          <div className="checkbox__wrapper">
            <span className="checkbox__wrapper-label">
              پرداخت خودکار از کیف پول{" "}
            </span>
            <Checkbox formItemOption={{ name: "fromWallet" }} />
          </div>
          <div className="carbils-checkbox__description">
            پرداخت خودکار از کیف پول این گزینه را فعال کنید تا عوارض به طور
            خودکار از کیف پول شما پرداخت شود.
          </div>
          <Button className="modal__btn" htmlType="submit">
            {btnName}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Pelak;
