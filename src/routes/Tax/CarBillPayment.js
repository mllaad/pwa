import { back } from "../../assets/icons";
import { useState, createRef, useRef } from "react";
import Checkbox from "../../components/baseComponents/Checkbox";
import { PelakCar } from "../../components/Pelak";
import { Button, Form } from "antd";
import Header from "../../components/Header";

const CarBillPayment = ({ routeState, setRouteState }) => {
  const data = [1, 2, 3, 4, 5, 5, 3, 2];

  const [form] = Form.useForm();
  const [number, setNumber] = useState(0);
  const elementsRef = useRef(data.map(() => createRef()));
  const selectAll = () =>
    data.map((i, d) => {
      form.setFieldValue([d], true);
      setNumber(data.length);
    });
  const changeHandle = () => {
    setNumber(
      elementsRef.current.filter((el) => el.current.input.checked === true)
        .length
    );
  };

  //  CANCEL
  const onCancel = () => null;

  // NEXT STATE
  const formHandle = (w) => null;

  return (
    <>
      <Header onBack={onCancel} title={"پرداخت عوارض خودرو"} />
      <div className="checkCarBills">
        <div className="checkCarBills__pelak">
          <div>
            <PelakCar value={[12, "الف", 234, 12]} />
          </div>
          <span className="checkCarBills__pelak-sp">ماشین من</span>
        </div>
        <div className="checkCarBills__list">
          <div className="checkCarBills__list__title">
            <span
              className="checkCarBills__list__title--blue"
              onClick={selectAll}
            >
              انتخاب همه
            </span>{" "}
            <span>لیست بدهی ها</span>
          </div>
          <Form
            className="checkCarBills__form"
            onFinish={formHandle}
            form={form}
            onChange={changeHandle}
          >
            <ul className="checkCarBills__ul">
              {data.map((i, index) => {
                return (
                  <li className="checkCarBills__li">
                    <span className="checkCarBills__li-price">قیمت</span>
                    <div className="checkCarBills__li-div">
                      <span>تاریخ</span>
                      <span>
                        {" "}
                        <Checkbox
                          formItemOption={{ name: index }}
                          componentOption={{
                            ref: elementsRef.current[index],
                            onChange: changeHandle,
                          }}
                        />{" "}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button className="modal__btn" htmlType="submit">
              <>
                <span>(مورد {number}) </span>
                <span>پرداخت</span>
              </>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CarBillPayment;
