import Header from "../../components/Header";
import { PelakCar, PelakMotor } from "../../components/Pelak";
import { clipboardIcon } from "../../assets/icons";
import { route } from "./index";
import { useState, useRef, createRef } from "react";
import { Form, Button } from "antd";
import Checkbox from "../../components/baseComponents/Checkbox";
import Expand from "../../components/Expand";
import CheckListExpand from "../../components/CheckListExpand";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const VioDetailList = (props) => {
  const type = true;
  const backHandle = () => props.navigate(-1);

  // ------------------------------------------

  const [form] = Form.useForm();
  const [number, setNumber] = useState(0);
  const selectAll = () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => form.setFieldValue([i], true));
    setNumber(8);
  };
  const changeHandle = (obj) => {
    const [value] = Object.values(obj);
    value ? setNumber((n) => n + 1) : setNumber((n) => n - 1);
  };

  const copyHandle = () => () => null;
  // ------------------------------------------

  const formHandle = (form) => {
    console.log(form, "FORM");
  };

  return (
    <>
      <Header onBack={backHandle} title={"پرداخت عوارض خودرو"} />
      <div className="vioallresult">
        {type ? (
          <PelakCar value={["13", "الف", "141", "19"]} />
        ) : (
          <PelakMotor value={["122", "1331"]} />
        )}
        <span className="vioallresult__title">
          {" "}
          {type ? "ماشین من" : "موتور من"}{" "}
        </span>
      </div>
      <Form
        form={form}
        className="viodetaillist__form"
        onFinish={formHandle}
        onValuesChange={changeHandle}
      >
        <div className="checkCarBills__list__title">
          <span
            className="checkCarBills__list__title--blue"
            onClick={selectAll}
          >
            انتخاب همه
          </span>{" "}
          <span>لیست بدهی ها</span>
        </div>
        <ul className="checkCarBills__ul">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => {
            return (
              <CheckListExpand inputName={index}>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
              </CheckListExpand>
            );
          })}
        </ul>
        <Button className="VioDetailList__btn" htmlType="submit">
          <>
            <span>(مورد {number}) </span>
            <span>پرداخت</span>
          </>
        </Button>
      </Form>
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
)(withRouter(VioDetailList));
