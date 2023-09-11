import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../../components/Header";
import SelectPhoneNumber from "../../components/SelectPhoneNumber";
import { route } from "./index";
import { useNavigate } from "react-router-dom";
import withRouter from "../../util/withModalRouter";
import { message } from "antd";

const Internet = (props) => {
  const navigate = useNavigate();

  const onCancel = () => navigate("/Internet", { state: { modal: false } });

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
    props.navigateByState("InternetOption", {
      phoneNumber,
      tarabari,
      checkBoxs,
    });
  };

  return (
    <>
      <Header onBack={onCancel} title={"خرید شارژ"} />
      <SelectPhoneNumber onSelect={formHandle} labels={["اعتباری", "دائمی"]} />
    </>
  );
};

const actionCreators = Object.assign({}, {});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  location: state.router.location,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Internet));
