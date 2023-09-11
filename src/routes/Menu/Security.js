import { useState } from "react";
import { Switch } from "antd";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../../util/withModalRouter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CallCoreService } from "../../appRedux/features/CoreService";

const Security = (props) => {
  const clickHandle = () => props.navigate("../ChangePassword");

  // const [_switch, setSwitch] = useState(false);
  // const onChange = () => {
  //   setSwitch((s) => !s);
  //   props.navigate("/Password");
  // };

  const backHandle = () => props.closeModal("..");

  return (
    <>
      <Header onBack={backHandle} title={"تنضیمات امنیت"} />
      <div className="Security">
        {/* <div className="Security__toggle">
          {" "}
          <Switch onChange={onChange} /> <span> رمز ورود به برنامه </span>{" "}
        </div> */}
        <div className="Security__pass" onClick={clickHandle}>
          {" "}
          تغییر رمز{" "}
        </div>
      </div>
    </>
  );
};

const actionCreators = Object.assign({}, { CallCoreService });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  coreData: state.coreServices.coreData,
  router: state.router,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Security));
