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
import { deleteViolaiton } from "../../appRedux/features/Violation";
const ViolationAll = (props) => {
  // one page can be
  // 'استعلام مجموع خلافی'
  // or
  // 'استعلام جزئیات خلافی'
  // **** routeState.header is saved untill get change *****
  // this component goes to next state  witch can be =>  [Pelak, VioAllResult] or [PelakDetail, ...]
  const [idForDelete, setIdForDelete] = useState();

  const backHandle = () => props.navigate("../");

  // alert
  const [alertShow, setAlertShow] = useState(false);

  // PelakSetting
  const deleteHandle = (id) => {
    setIdForDelete(id);
    setAlertShow(true);
  };

  const _deleteHandle = () => {
    console.log("okokokokok");
    props.actions.deleteViolaiton(idForDelete);
    setAlertShow(false);
  };

  const editHandle = (id) => () =>
    props.navigateByState("../Pelak", { type: "edit", id });
  const addHandle = () => props.navigateByState("../Pelak", { type: "add" });
  const selectHandle = (obj) => () =>
    props.navigateByState("../VioAllResult", { ...obj });

  console.log(props.vio);

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
        {props.vio.data.length ? (
          <div className="pelak__title">پلاک مورد نظر خود را انتخاب کنید</div>
        ) : (
          ""
        )}
      </div>
      <div className="pelak__scroll">
        {props.vio.data.map((obj) => {
          console.log(obj, "OBJJJJ");
          return (
            <PelakSetting
              key={obj.name}
              type={obj.type === 1 ? false : true}
              name={obj.name}
              value={obj.pelak}
              onDelete={deleteHandle}
              onEdit={editHandle(obj.id)}
              onSelect={selectHandle(obj)}
            />
          );
        })}
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
            <Button className="white-btn" onClick={() => _deleteHandle()}>
              {" "}
              بله{" "}
            </Button>
          </div>
        </div>
      </Alert>
    </>
  );
};

const actionCreators = Object.assign({}, { deleteViolaiton });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreServices.coreData,
  coreDataState: state.coreServices.coreDataState,
  auth: state.auth,
  router: state.router,
  vio: state.vio,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ViolationAll));
