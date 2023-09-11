import { Button } from "antd";
import {
  back,
  plusIcon,
  editIcon,
  deleteIcon,
  alertNotice,
} from "../../assets/icons";

import { PelakCar } from "../../components/Pelak";
import { useState } from "react";
import Alert from "../../components/Alert";

import Header from "../../components/Header";

const CarBills = ({ routeState, setRouteState }) => {
  // alert
  const [alertShow, setAlertShow] = useState(false);
  const alertOk = () => setAlertShow(false);
  const alertCancel = () => setAlertShow(false);
  const removeHandle = () => setAlertShow(true);

  const onCancel = () => null;
  const editHandle = () => null;
  const selectPelak = () => null;
  const addHandle = () => null;

  return (
    <>
      <Header onBack={onCancel} title={"عوارض خودرو"} />
      <div className="carbill-add">
        <Button className="carbill-add__btn" onClick={addHandle}>
          {" "}
          <>
            <span>افزودن پلاک جدید </span>{" "}
            <span className="carbill-add__btn_svg"> {plusIcon} </span>
          </>{" "}
        </Button>
        <div className="carbill__title"> پلاک مورد نظر را انتخاب کنید </div>
        <div className="mypelak__contianer">
          <div className="myplak__setting">
            <div className="mypelak__edit" onClick={editHandle}>
              {editIcon}
            </div>
            <div className="mypelak__remove" onClick={removeHandle}>
              {deleteIcon}
            </div>
          </div>
          <div className="mypelak">
            <div className="mypelak__title">ماشین من</div>
            <div className="mypelak__pelak" onClick={selectPelak}>
              <PelakCar value={[12, "الف", 234, 12]} />
            </div>
          </div>
        </div>
      </div>
      <Alert isOn={alertShow}>
        <div className="alert__container">
          {alertNotice}
          <p>ایا برای حذف این پلاک اطمینان دارید</p>
          <div className="alert__btn">
            <Button className="blue-btn" onClick={alertCancel}>
              {" "}
              خیر{" "}
            </Button>
            <Button className="white-btn" onClick={alertOk}>
              {" "}
              بله{" "}
            </Button>
          </div>
        </div>
      </Alert>
    </>
  );
};

export default CarBills;
