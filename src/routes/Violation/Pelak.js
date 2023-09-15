import { useState } from "react";
import { back } from "../../assets/icons";
import { Button, Form } from "antd";
import Input from "../../components/baseComponents/Input";
import Checkbox from "../../components/baseComponents/Checkbox";
import { route } from "./index";
import MotorPelakInput from "../../components/MotorPelakInput";
import CarPelakInput from "../../components/CarPelakInput";
import Header from "../../components/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import withRouter from "../../util/withModalRouter";
import { useEffect } from "react";
import {
  createViolaiton,
  updateViolaiton,
} from "../../appRedux/features/Violation";

const Pelak = (props) => {
  // remove syncfiusion message
  useEffect(() => {
    document.querySelector('div[style*="z-index: 999999999;"]').style.display =
      "none";
  });

  const onCancel = () => props.navigate(-1);

  // 1 => خودرو
  // 0 => موتور
  const [type, setType] = useState(1);

  const [pelak, setPelak] = useState();

  const label = type === 1 ? "نام خودرو " : "نام موتور سیکلت";

  console.log(props.vio, "props.vio");
  const formHandle = (form) => {
    const name = form.pelak;
    const pelakType = Object.keys(pelak).some((d) => d === "motor") ? 2 : 1;
    const pelakValue = Object.values(pelak).reduce(
      (t, v) => [...t, ...Object.values(v)],
      []
    );
    const guid = () => Math.floor(Math.random() * 100000000000);
    if (props.router.location.state.type === "add") {
      props.actions.createViolaiton({
        name,
        type: pelakType,
        pelak: [...pelakValue],
        id: guid(),
      });
    }
    console.log(props.router.location.state.id);
    if (props.router.location.state.type === "edit") {
      props.actions.updateViolaiton({
        name,
        type: pelakType,
        pelak: [...pelakValue],
        id: props.router.location.state.id,
      });
    }

    props.navigate("../Violation1");
  };

  return (
    <>
      <Header onBack={onCancel} title={""} />
      <div className="addpelak__container">
        <div className="checkbox--group">
          <div className="checkbox">
            <label className="pelak__label"> موتور سیکلت </label>
            <Checkbox
              componentOption={{
                checked: type ? false : true,
                onChange: () => setType(0),
              }}
            />
          </div>

          <div className="checkbox">
            <label className="pelak__label"> خودرو </label>
            <Checkbox
              componentOption={{
                checked: type ? true : false,
                onChange: () => setType(1),
              }}
            />
          </div>
        </div>

        <div className="" style={{ width: "100%" }}>
          {type === 1 ? (
            <CarPelakInput onCompelete={(value) => setPelak({ car: value })} />
          ) : (
            <MotorPelakInput
              onCompelete={(value) => setPelak({ motor: value })}
            />
          )}
        </div>

        <div className="addpelak__container2">
          <Form onFinish={formHandle}>
            <Input
              formItemOption={{
                name: "pelak",
                label: label,
                // rules: [{ pattern: /^\d+$/, message: "بصورت عددی وارد کنید" }],
              }}
              componentOption={{
                style: { textAlign: "center" },
                autoComplete: "off",
                placeholder: "برای این پلاک یک نام انتخاب کنید",
              }}
            />

            <Button htmlType="submit" className="form__btn">
              {" "}
              تایید{" "}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

const actionCreators = Object.assign({}, { createViolaiton, updateViolaiton });
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Pelak));
