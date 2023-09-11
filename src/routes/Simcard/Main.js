import { connect } from "react-redux";
import Header from "../../components/Header";
import SelectPhoneNumber from "../../components/SelectPhoneNumber";
import withRouter from "../../util/withModalRouter";
import { bindActionCreators } from "redux";
import { message } from "antd";

const Simcard = (props) => {
  const onCancel = () => props.closeModal();

  const formHandle = ({ phoneNumber, tarabari, ...checkBoxs }) => {
    if (!phoneNumber) {
      message.error("شماره تلفن را وارد نمایید");
      return;
    }
    const checked = Object.values(checkBoxs).some((value) => value === true);
    if (!checked) {
      message.error("نوع سیمکارت را مشخص کنید");
      return;
    }
    props.navigateByState("ChargeSimCard", {
      phoneNumber,
      tarabari,
      checkBoxs,
    });
  };

  return (
    <>
      <Header onBack={onCancel} title={"خرید شارژ"} />
      <SelectPhoneNumber
        onSelect={formHandle}
        labels={["عادی", "شگفت انگیز"]}
      />
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
)(withRouter(Simcard));
