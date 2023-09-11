import { PelakSetting } from "../../components/Pelak";
import { AddPelakBtn } from "../../components/Btns";
import Header from "../../components/Header";
import { route } from "./index";
import { Button } from "antd";
import { useState } from "react";
import { alertNotice } from "../../assets/icons";
import Alert from "../../components/Alert";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withRouter from "../../util/withModalRouter";

const VioDetail = (props) => {
  const backHandle = () => props.navigate(-1);
  const addHandle = () => null;

  // alert
  const [alertShow, setAlertShow] = useState(false);
  const alertCancel = () => setAlertShow(false);
  const alertOk = () => setAlertShow(false);

  // PelakSetting
  const deleteHandle = () => setAlertShow(true);
  const editHandle = () => null;
  const selectHandle = () => null;

  return (
    <>
      <Header onBack={backHandle} title={"استعلام جزئیات خلافی"} />
      <div className="violationall">
        <span className="ul__title">ویژگی ها</span>
        <ul className="violationall__ul">
          <li className="violationall__li">هزینه استعلام 5,200 تومان</li>
          <li className="violationall__li">نمایش مجموع خلافی بدون جزئیات</li>
          <li className="violationall__li">استعلام با شماره پلاک خودرو</li>
          <li className="violationall__li">بدون نیاز به احراز هویت</li>
        </ul>

        <AddPelakBtn onClick={addHandle} />
        <div className="pelak__title">پلاک مورد نظر خود را انتخاب کنید</div>
      </div>
      <div className="pelak__scroll">
        <PelakSetting
          type={true}
          value={["123", "4567"]}
          onDelete={deleteHandle}
          onEdit={editHandle}
          onSelect={selectHandle}
        />
        <PelakSetting
          type={false}
          value={["123", "الف", "352", "76"]}
          onDelete={deleteHandle}
          onEdit={editHandle}
          onSelect={selectHandle}
        />
        <PelakSetting
          type={true}
          value={["123", "4567"]}
          onDelete={deleteHandle}
          onEdit={editHandle}
          onSelect={selectHandle}
        />
        <PelakSetting
          type={false}
          value={["123", "الف", "352", "76"]}
          onDelete={deleteHandle}
          onEdit={editHandle}
          onSelect={selectHandle}
        />
        <PelakSetting
          type={false}
          value={["123", "الف", "352", "76"]}
          onDelete={deleteHandle}
          onEdit={editHandle}
          onSelect={selectHandle}
        />
        <PelakSetting
          type={true}
          value={["123", "4567"]}
          onDelete={deleteHandle}
          onEdit={editHandle}
          onSelect={selectHandle}
        />
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

const actionCreators = Object.assign({}, {});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreServices.coreData,
  coreDataState: state.coreServices.coreDataState,
  auth: state.auth,
  router: state.router,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(VioDetail));
