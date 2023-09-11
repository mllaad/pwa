import { useState } from "react";
import { back } from "../../assets/icons";
import { Button } from "antd";
import Input from "../../components/baseComponents/Input";
import Checkbox from "../../components/baseComponents/Checkbox";
import { route } from "./index";
import MotorPelakInput from "../../components/MotorPelakInput";
import CarPelakInput from "../../components/CarPelakInput";
import Header from "../../components/Header";

const PelakDetail = ({ routeState, setRouteState }) => {
  // 1 => خودرو
  // 0 => موتور
  const [type, setType] = useState(1);
  const [pelak, setPelak] = useState();

  const onCancel = () => null;

  const typeHandle = (type) => (e) => setType(type);
  const pelakHandle = (_type) => (type) => null;
  const addHandle = () => null;

  const label = type === 1 ? "نام خودرو " : "نام موتور سیکلت";
  return (
    <>
      <Header onBack={onCancel} title={routeState.header} />
      <div className="addpelakdetail__container">
        <div className="checkbox--group">
          <div className="checkbox">
            <label> موتور سیکلت </label>
            <Checkbox
              componentOption={{
                checked: type ? false : true,
                onChange: typeHandle(0),
              }}
            />
            {/* <Checkbox formItemOption={{name: index }} componentOption={{ref:elementsRef.current[index], onChange: changeHandle}} /> */}
          </div>

          <div className="checkbox">
            <label> خودرو </label>
            <Checkbox
              componentOption={{
                checked: type ? true : false,
                onChange: typeHandle(1),
              }}
            />
          </div>
        </div>

        <div className="" style={{ width: "100%" }}>
          {type === 1 ? (
            <CarPelakInput onCompelete={pelakHandle("car")} />
          ) : (
            <MotorPelakInput onCompelete={pelakHandle("motor")} />
          )}
        </div>

        <div className="addpelak__container2">
          <Input
            formItemOption={{ label: label }}
            componentOption={{
              style: { textAlign: "right" },
              className: "normal-input",
              placeholder: "برای این پلاک یک نام انتخاب کنید",
            }}
          />
          <title className="addpelak__title">تایید مالکیت</title>
          <div className="addpelak__desc">
            تایید مالکیت تنها در صورتی که شماره تلفن همراه، کد ملی و پلاک وسیله
            نقلیه به‌ نام یک نفر ثبت شده باشد، قادر به مشاهده جزئیات خلافی
            خواهید بود .
          </div>
          <Button className="PelakDetail__btn" onClick={addHandle}>
            {" "}
            احراز هویت{" "}
          </Button>
        </div>
      </div>
    </>
  );
};
export default PelakDetail;
