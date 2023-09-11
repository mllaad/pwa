import { PelakSetting } from "../../components/Pelak";
import { AddPelakBtn } from "../../components/Btns";
import Header from "../../components/Header";
import { Button } from "antd";
import { useState } from "react";
import { alertNotice } from "../../assets/icons";
import Alert from "../../components/Alert";
import withRouter from "../../util/withModalRouter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ViolationAll = (props) => {
  // one page can be
  // 'استعلام مجموع خلافی'
  // or
  // 'استعلام جزئیات خلافی'
  // **** routeState.header is saved untill get change *****
  // this component goes to next state  witch can be =>  [Pelak, VioAllResult] or [PelakDetail, ...]

  const backHandle = () => props.navigate("../");

  // alert
  const [alertShow, setAlertShow] = useState(false);

  // PelakSetting
  const deleteHandle = () => setAlertShow(true);
  const editHandle = () => props.navigate("../Pelak");
  const addHandle = () => props.navigate("../Pelak");
  const selectHandle = () => props.navigate("../VioAllResult");

  return (
    <>
      <Header onBack={backHandle} title={"استعلام مجموع خلافی"} />
      <div className="violationall">
        <span className="violationall__title">ویژگی ها</span>
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
            <Button className="blue-btn" onClick={() => setAlertShow(false)}>
              {" "}
              خیر{" "}
            </Button>
            <Button className="white-btn" onClick={() => setAlertShow(false)}>
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
)(withRouter(ViolationAll));
