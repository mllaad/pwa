import Header from "../../components/Header";

import { PelakCar, PelakMotor } from "../../components/Pelak";
import { Button } from "antd";
import withRouter from "../../util/withModalRouter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const VioAllResult = (props) => {
  const backHandle = () => props.navigate("../Violation1");

  const clickHandle = () => props.navigate("../../Payment");

  const obj = props.router.location.state;

  return (
    <>
      <Header onBack={backHandle} title={"مجموع خلافی"} />
      <div className="vioallresult">
        {obj.type === 1 ? (
          <PelakCar value={[...obj.pelak]} />
        ) : (
          <PelakMotor value={[...obj.pelak]} />
        )}
        <span className="vioallresult__title"> {obj.name}</span>
      </div>
      <div className="vioallresult__content">
        <div className="vioallresult__content--black">
          {" "}
          مجموع خلافی تا تاریخ 1402/02/02{" "}
        </div>
        <div className="vioallresult__content--orange"> تومان 108,640 </div>
      </div>
      <Button className="vioallresult__btn " onClick={clickHandle}>
        {" "}
        پرداخت{" "}
      </Button>
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
)(withRouter(VioAllResult));
