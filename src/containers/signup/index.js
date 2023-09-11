import PhoneNumber0 from "./PhoneNumber0";
import PhoneNumber1 from "./PhoneNumber1";
import PhoneNumber2 from "./PhoneNumber2";
import CodeMeli0 from "./CodeMeli0";
import CodeMeli1 from "./CodeMeli1";
import "../../assets/bg.png";
import { Routes, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import StartSection from "./StartSection";
import ForgotPassword0 from "./ForgotPassword0";
import ForgotPassword1 from "./ForgotPassword1";
import ForgotPassword2 from "./ForgotPassword2";

const SignUp = (props) => {
  return (
    <Routes>
      <Route path="/" element={<StartSection />} />
      <Route path="PhoneNumber0" element={<PhoneNumber0 />} />
      <Route path="/PhoneNumber1" element={<PhoneNumber1 />} />
      <Route path="/PhoneNumber2" element={<PhoneNumber2 />} />
      <Route path="ForgotPassword0" element={<ForgotPassword0 />} />
      <Route path="ForgotPassword1" element={<ForgotPassword1 />} />
      <Route path="ForgotPassword2" element={<ForgotPassword2 />} />
      <Route path="/CodeMeli0" element={<CodeMeli0 />} />
      <Route path="/CodeMeli1" element={<CodeMeli1 />} />
      <Route path="*" element={<div> NOT FOUND </div>} />
    </Routes>
  );
};

const actionCreators = Object.assign({}, {});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});
const mapStateToProps = (state) => ({
  // userPhoneNumber: state.auth.userPhoneNumber,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
