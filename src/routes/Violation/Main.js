import { back } from "../../assets/icons";
import {
  violationAll,
  violationDetail,
  violationList,
  violationPayment,
} from "../../assets/violation/violation";

import { useState } from "react";
import Header from "../../components/Header";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { message } from "antd";

const Violation = (props) => {
  const onCancel = () => props.closeModal();

  const clickHandle = (route) => () =>
    route ? props.navigate(route) : message.error("توسعه پیدا نکرده");

  return (
    <>
      <Header onBack={onCancel} title={"استعلام خلافی"} />
      <div className="violation__grid">
        <div
          className="violation__grid-item"
          onClick={clickHandle("Violation1")}
        >
          <span className="gridsvg">{violationAll}</span>
          <span className="textsvg">مجموع خلافی</span>
        </div>
        {/* <div
          className="violation__grid-item"
          style={{ backgroundColor: "black" }}
          onClick={clickHandle("")}
          // onClick={clickHandle("Violation2")}
        >
          <span className="gridsvg">{violationDetail}</span>
          <span className="textsvg">جزئیات خلافی</span>
        </div>
        <div
          style={{ backgroundColor: "black" }}
          className="violation__grid-item"
          onClick={clickHandle()}
        >
          <span className="gridsvg">{violationPayment}</span>
          <span className="textsvg">پرداخت با شناسه</span>
        </div>
        <div
          className="violation__grid-item"
          onClick={clickHandle("Violation4")}
        >
          <span className="gridsvg">{violationList}</span>
          <span className="textsvg">لیست استعلام ها</span>
        </div> */}
      </div>
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
)(withRouter(Violation));
